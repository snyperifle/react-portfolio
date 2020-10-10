import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div><h1>This is projects</h1></div>
            )
        } else if(this.state.activeTab === 1) {
            return(
            <div><h1>This is homework</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple >
                    <Tab>Projects</Tab>
                    <Tab>Homework</Tab>
                </Tabs>

                <section className="projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Project;