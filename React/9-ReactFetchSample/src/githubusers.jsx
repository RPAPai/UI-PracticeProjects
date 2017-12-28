import React from "react";
const urlForUsername = username =>
  `https://api.github.com/users/${username}`

export default class GitHubUsers extends React.Component {

 constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

/*
  componentDidMount() {
    fetch(urlForUsername(this.props.username))
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
		  console.log(JSON.stringify(d));
        this.setState({
          githubData: d
        })
      }, () => {
		  console.log("roopa failed");
        this.setState({
          requestFailed: true
        })
      })
  }

    componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
    */

   // .then(response => response.ok ? response.json() : throw Error("Network request failed"))

  componentDidMount(){
	fetch('https://api.github.com/users/rspai')
	.then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }

        return response.json();
      })
	.then(data=>{
		  console.log("roopa  got data",data)
		this.setState({githubData:data})
		})
	.catch(error => { console.log("roopa failed")
	this.setState({requestFailed: true});

	});

}



	/*
   componentDidMount(){

	fetch('https://api.github.com/users/rspai')
	.then(response => {if(response.ok) return  response.json(); else  throw Error("Network request failed")})
	.then(data=>{
		console.log("Hi  got data",data)
		this.setState({githubData:data})
		})
	.catch(error => { console.log("Sorry did not get any data")
	this.setState({requestFailed: true});

	});

  }
	*/



  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.githubData) return <p>Loading...</p>
    return (
      <div>
        <h2>From Git hub API:</h2>
        <h3> User Name = {this.state.githubData.name}</h3>
        <div>My Github data  = {JSON.stringify(this.state.githubData)}</div>
      </div>
    )
  }

}
