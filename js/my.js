console.log("included");

	let tweetobj = {
		profilename: "Design Bolts",
		username: "@designbolts",
		tweet: "I have a new resource",
		rt: 6,
		likes: 17,
		isShown: true,
		replies: [
			{
				username: "@juliuscaesar",
				reply: "Actually nice.",

			},
			
			{
				username: "@johnricky",
				reply: "Actually not nice.",

			},

			{
				username: "@juliemarie",
				reply: "AAAAAAA",

			},
				
			],
			rt: function () {
				console.log("retweeting");
			}, 

			hitLike: function () {
				this.likes++;
			},

			showReplies: function (){
				for(reply of this.replies) {
					console.log('${reply.username}: ${reply.reply}');
				}
			}
	}
	tweetobj.showReplies();