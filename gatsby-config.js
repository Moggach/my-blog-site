module.exports = {
  siteMetadata: {
    title: `Anna Cunnane`,
    description: 'A personal blog site',
    author: `Anna Cunnane`,
  },
  
  plugins: [

    {
        resolve: `gatsby-plugin-gtag`,
        options: {
          
          trackingId: `UA-180669945-1',
        },
      },

      {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        }
    }

    'gatsby-plugin-react-helmet',
   
    
    'gatsby-plugin-sharp',
    {
        resolve: 'gatsby-transformer-remark',
        options: {
            plugins: [
                'gatsby-remark-relative-images',
                {
                    resolve: 'gatsby-remark-images',
                    options: {
                        maxWidth: 600,
                        linkImagesToOriginal: false
      
                    }
                }
            ]
        }
    }
]
}