import React, { Component } from 'react'

export default class DislikesButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dislikes: 0
        }
    }

    componentDidMount() {
        const { id } = this.props;
        fetch(`/api/v1/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    dislikes: data.dislikes
                })
            })
    }

    increaseDislikes = () => {
        const { id } = this.props;

        fetch(`/api/v1/recipes/${id}/dislikes`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    dislikes: data
                })
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.increaseDislikes}>
                    <span role="img" aria-label="Dislikes: ">👎</span> {this.state.dislikes}
                </button>
            </div>
        )
    }
}