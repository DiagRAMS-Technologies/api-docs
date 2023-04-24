import { AppLayout } from "@/layouts/app";
import { dracula, CopyBlock } from "react-code-blocks";

const codeGenerateToken = `curl -X POST 
    'https://api.diagrams-technologies.com/v0/oauth2/token' 
    -u"APPLICATION_ID:APPLICATION_SECRET" 
    -H'Content-Type: application/x-www-form-urlencoded' --data-binary 'grant_type=client_credentials'`

const codeResultGenerateToken = `{
      "access_token": "xxx.yyy.zzz",
      "token_type": "bearer",
      "expires_in": 172800,
      "expiration_date": "2021-10-27T12:06:28.828Z",
      "refresh_token": "xxxyyyzzzz==",
      "refresh_token_expires_in": 31557600,
      "refresh_token_expiration_date": "2022-10-25T18:06:28.849Z"
}`

const codeRefreshToken = `curl -X POST 
    'https://api.diagrams-technologies.com/v0/oauth2/token' 
    -H'Content-Type: application/x-www-form-urlencoded' --data-binary 'grant_type=refresh_token&scope=data&refresh_token=refresh_token_encoded' 
    -u"APPLICATION_ID:APPLICATION_SECRET"`

const themes = dracula

const showLineNumbers = false

const wrapLongLines = true

export default function Auth() {
  return (
    <>
      <AppLayout></AppLayout>
        <div className="auth-container">

          <h1>API Auth guide</h1>
          <p>A text of welcome !</p>
          
          <h2>First task !</h2>
          <p>To start sending us data, you will need : </p>
          <ul>
            <li><strong>ML_PROJECT=</strong></li>
            <li><strong>ORGANISATION_ID=</strong></li>
            <li><strong>APPLICATION_ID=</strong></li>
            <li><strong>APPLICATION_SECRET=</strong></li>
          </ul>
          
          <h2>Generate token</h2>
          <p>You can now generate token with request : </p>
          
          <CopyBlock 
            text={codeGenerateToken} 
            language={"bash"} 
            theme={themes} 
            wrapLongLines={wrapLongLines} 
            {...{ showLineNumbers}} 
            customStyle={{fontSize: 'calc(var(--mediumFontSize)*0.75)',}}
          />
          
          <p>And it&apos;s the result of the request.</p>
          
          <CopyBlock 
            text={codeResultGenerateToken} 
            language={"bash"} 
            theme={themes} 
            wrapLongLines={wrapLongLines} 
            {...{ showLineNumbers}} 
            customStyle={{fontSize: 'calc(var(--mediumFontSize)*0.75)',}}
          />
          
          <h2>Validity token</h2>
          <p>The token is only valid for a certain duration (which can change depending on the load),
            after which it will have to be renewed by creating a new token or by renewing the previous one thanks to the refresh_token associated with it:</p>
          
          <CopyBlock 
            text={codeRefreshToken} 
            language={"bash"} 
            theme={themes} 
            wrapLongLines={wrapLongLines} 
            {...{ showLineNumbers}} 
            customStyle={{fontSize: 'calc(var(--mediumFontSize)*0.75)',overflow: "auto",}}
          />
          
          <p>For renewal, several possible strategies:</p>
          <ul>
            <li>Keep the value of the expires_in field of the token and check it before sending.</li>
            <li>Wait to encounter a 401 error to renew it and retry the call.</li>
            <li>Decode the JWT token to extract its expiration date before the call.</li>
          </ul>

        </div>
        <style jsx>{`
          .auth-container{
            max-width: 1160px;
            margin: 0 auto;
            padding: 40px;
          }

          h1{
            font-size: calc(var(--giantFontSize)*0.7);
            margin-bottom: 15px;
          }

          h2{
            font-size: calc(var(--giantFontSize)*0.6);
            margin: 15px 0px;
          }

          p{
            font-size: var(--mediumFontSize);
            margin: 15px;
            padding-left: 5px;
          }

          ul{
            font-size: var(--mediumFontSize);
            margin-bottom: 15px;
            padding-left: 50px;
          }
            
          li{
            font-size: var(--mediumFontSize);
            margin-bottom: 15px;
            padding-left: 10px;
          }  
        `}</style>
    </>
  )
}
