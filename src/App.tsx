import React from 'react'
//import styled from 'styled-components'
//import { Button, Title } from '@gnosis.pm/safe-react-components'
//import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk'

const SafeApp = (): React.ReactElement => {
	const content = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>CredLencer</title>

    <!-- Bootstrap -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.2/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  <div class="container">
  <div class="row ">
    <div class="col"> </div>
	  <div class="col">
 <img src='https://definance.wpmix.net/app/logo.jpg' style='width:300px'> <br>
    
	
	
	<form action="">
	<div class="form-group">
    <label for="exampleFormControlTextarea1">Your task</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Level0  lancers required</label>
    <input type="number" class="form-control" id="exampleInputEmail1" placeholder="Enter number">
    <small id="emailHelp" class="form-text text-muted">How many newbes you need .</small>
  </div>
  
  <div class="form-group">
    <label for="exampleInputEmail1">Level1  lancers required</label>
    <input type="number" class="form-control" id="exampleInputEmail1" placeholder="Enter number">
   <small id="emailHelp" class="form-text text-muted">How many experts you need .</small>
  </div>
  
	<input type='button'  class="btn btn-primary" value='Place task'>
	</form>
	</div>
	
	<div class="col"></div>
	</div> 
	
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.2/js/bootstrap.min.js"></script>
  </body>
</html>`
	
 
  

  return <div dangerouslySetInnerHTML={{__html: content }}/>
}

export default SafeApp
