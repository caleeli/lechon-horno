var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		user: {
			name: 'David Callizaya',
			email: 'davidcallizaya@gmail.com'
		}
	},
	() => {
		console.log('Deploy Complete!')
	}
)
