
//API Data
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const output = "&lang=en&of=json&txt=";


async function handleSubmit( event ) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById( 'website' ).value
    // console.log("checkForUrl", Client.checkForUrl(formText));
    if( Client.checkForUrl( url )) {
        console.log( "::: Form Submitted :::" )

        fetch( '/api-key')
          .then( key => key.json() )
          .then( key => {

            fetch( baseUrl + key.apiKey + output + url )
                .then( res => res.json() )
                .then( res => {

                  document.getElementById( 'score' ).innerHTML = `Score: ${ res.score_tag }`;
                  document.getElementById( 'agreement' ).innerHTML = `Agreement: ${ res.agreement }`;
                  document.getElementById( 'subjectivity' ).innerHTML = `Subjectivity: ${ res.subjectivity }`;
                  document.getElementById( 'irony' ).innerHTML = `Irony: ${ res.irony }`;
                  document.getElementById( 'confidence' ).innerHTML = `Confidence: ${ res.confidence }`;

              })
          })
    }
}

export { handleSubmit }
