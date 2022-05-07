var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/caleeli/lechon-horno.git',
		user: {
			name: 'David Callizaya',
			email: 'davidcallizaya@gmail.com'
		}
	},
	(err) => {
		console.log('Deploy Complete!', err)
	}
)
