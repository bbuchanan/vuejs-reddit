import { Vue, Component } from 'av-ts'
import axios from 'axios'
import { Posts } from '../models/posts'

@Component({
template:  `
	<div>
		<h1>Top 5 Posts</h1>
		<p>Enter the subreddit to see the top 5 posts.</p>
		<p><input v-model="subreddit"></p>
		<button @click="load">Load Posts</button>
		<p>{{data}}</p>
	</div>
`})

export default class HelloReddit extends Vue {
	subreddit: string = ''
	data: string = 'Hello'
	redditPosts: Posts
	errorMessage: string = ''
	load() {
		axios.get(`https://www.reddit.com/r/${this.subreddit}/top.json?limit=5`).then(response => {
			console.log(response.data)
			this.redditPosts = <Posts>response.data
			this.data = this.redditPosts.data.children[0].data.title
		})
	}
}
