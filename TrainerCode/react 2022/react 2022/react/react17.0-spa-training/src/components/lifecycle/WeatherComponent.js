import React from 'react';
class WeatherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: "Sunny",
            pictures: []
        };
    }

    componentDidMount() {
        console.log("inside componentDidMount method");
        //REST Call   axios.get axios.put,axios.post,axios.delete
        fetch('https://randomuser.me/api/?results:100')
            .then(results => {
                return results.json();
            }).then(data => {
                var pictures = data.results.map(pic => {
                    return (
                        <div key={Math.random()}>
                            <img src={pic.picture.medium} />
                        </div>
                    )
                })
                this.setState({ pictures: pictures });
                console.log("state", this.state.pictures);
            })
    }
    changeName() {
        this.setState({ weather: "Rainy" })
    }
    render() {
        console.log("inside render method");
        return (
            <div>
                <h1>Today Weather is : {this.state.weather}</h1>
                <button onClick={(event) => this.changeName(event)}>
                    Change weather to Rainy
                </button>
                <span>
                    {this.state.pictures}
                </span>
            </div>
        );
    }
}
export default WeatherComponent;

/*
fetch (ES6)  get/post/put/delete
axios    library     CRUD powerful
$ajax.get

Promise : async invoke

function LRT(){
      return new Promise(resolve,reject){
          if (done)
              resolve(data)
        else
            reject('sorry.. can not fetch')
      }
} 

function SRT(){
    console.log('HNY')
}

LRT().then (resp =>dosomeotherwork(response.data))
.error(err=>console.log(err))
SRT()


*/