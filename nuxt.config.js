module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: "Code Hope",
        htmlAttrs: {
            lang: 'en',
          },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
				content: "Code Hope"
            }
        ],
        link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com/",
				crossorigin: true
			},
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            }
        ]
	},
	/*
  	** Router config
  */
	router: {
		// middleware: 'check-auth'
	},
    plugins: ["~/plugins/vuetify.js"],
    css: ["~/assets/style/app.styl"],
    /*
     ** Customize the progress bar color
     */
    loading: { color: "#3B8070" },
    /*
     ** Build configuration
     */
    build: {
		// vendor: ['axios'],
        extractCSS: true,
        extend(config, ctx) {
            // Run ESLint on save
            // if (ctx.isDev && ctx.isClient) {
            //     config.module.rules.push({
            //         enforce: "pre",
            //         test: /\.(js|vue)$/,
            //         loader: "eslint-loader",
            //         exclude: /(node_modules)/
            //     });
            // }
        }
	},
	serverMiddleware: [
		'~/server/index.js',
	]
};
