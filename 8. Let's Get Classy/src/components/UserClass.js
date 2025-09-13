    import React from "react";
    // Class Component
    
    class UserClass extends React.Component {

        constructor(props) {
            super(props);
            // console.log("Child - constructor");

            this.state = {
                count: 0,
                count2: 1, 
                userInfo: {
                    name: "Dummy Name",
                    location: "Default Location"
                }
            };
        }

        async componentDidMount() {

            async function fetchData() {
                const data = await fetch("https://api.github.com/users/d2j1");
                const json = await data.json();

                // console.log(json);
              
                return json;
            }
            const userInfo = await fetchData();
                 this.setState({
                    userInfo: userInfo
                });
            console.log("Component Did Mount");

            this.timer = setInterval(() => {
                console.log("Namaste React OP");
            }, 1000);
        }

        componentDidUpdate(){
            console.log("Component Did Update");
        }

        componentWillUnmount(){
            console.log("Component Will Unmount");
            clearInterval(this.timer);
        }

        render() {

            const { name } = this.props;


            return (
                <div className="user-card">
                    <h2>Name: {this.props.name}</h2>
                    <h2>Name: {name} {"Destructured"}</h2>
                    <h3> API DATA :- Name: {this.state.userInfo.name}</h3>
                    <h3>API DATA :- Location: {this.state.userInfo.location}</h3>
                    <h4>Contact: 123-456-7890</h4>
                    <h4>Count: {this.state.count}</h4>
                    <button onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                            count2: this.state.count2 + 1
                        })
                    }}>Set Count</button>
                    <h4>Count2: {this.state.count2}</h4>
                </div>
            )
        }

    }


    export default UserClass;   