import React, { Component } from 'react';
import './App/App.scss';
import Decoration from '../assets/Decoration.svg';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: this.props.organizations,
            currentPage: 1,
            namesPerPage: 3,
            // border: ""
        }
    }


    handleClick = (event, i) => {
        this.setState({
            currentPage: i,
            // border: "0.75px solid #3c3c3c"
        })
    };


    render() {
        const { names, currentPage, namesPerPage } = this.state;

        const indexOfLast = currentPage * namesPerPage;
        const indexOfFirst = indexOfLast - namesPerPage;
        const currentNames = names.slice(indexOfFirst, indexOfLast);

        const elements = currentNames.map((org, i) => {
            return (
                <>
                <div className="organizations-component_inside">
                    <div className="organizations-names">
                        <h1 key={i}> {org.name} </h1>
                        <span key={i}> {org.description}</span>
                    </div>
                    <div className="organizations-tags">
                        <h5 key={i}> {org.tags}</h5>
                    </div>
                </div>
                </>
            )
        });


        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(names.length / namesPerPage); i++) {
            const element = <li key={i}
                onClick={e => this.handleClick(e,i)}
                // style={{border:this.state.border}}
                >
                {i}
            </li>
            pageNumbers.push(element)
        }


        return <section>
            <div className="organizations-component">
                <ul className="names">
                    {elements}
                </ul>
            </div>
            <ul className="pagination">
                {pageNumbers}
            </ul>
        </section>
    }
};

class WhoWeHelp extends Component {

    state = {
        userSelection: [ "Foundations", "Organizations"]
    }

    render() {

        const Foundations = {
            description: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
            data: [
                {
                    name: "Nonprofit Foundation 1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    tags: ["lorem ipsum"]
                },
                {
                    name: "Nonprofit Foundation 2",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    tags: ["dolor sit amet"]
                },
                {
                    name: "Nonprofit Foundation 3",
                    description: "Sed posuere urna nec tincidunt praesent semper feugiat nibh.",
                    tags: ["lacus sed viverra tellus"]
                },
                {
                    name: "Nonprofit Foundation 4",
                    description: "Lectus proin nibh nisl condimentum id venenatis a condimentum.",
                    tags: ["dolor sit amet"]
                },
                {
                    name: "Nonprofit Foundation 5",
                    description: "Diam donec adipiscing tristique risus nec feugiat in fermentum.",
                    tags: ["lacus sed viverra tellus"]
                },
                {
                    name: "Nonprofit Foundation 6",
                    description: "Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.",
                    tags: ["lorem ipsum"]
                },
                {
                    name: "Nonprofit Foundation 7",
                    description: "Sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit.",
                    tags: ["dolor sit amet"]
                },
                {
                    name: "Nonprofit Foundation 8",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    tags: ["volutpat commodo sed"]
                },
                {
                    name: "Nonprofit Foundation 9",
                    description: "Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.",
                    tags: ["donec adipiscing tristique"]
                }
            ]
        }
        const Organizations = {
            description: "W naszej bazie znajdziesz listę zweryfikowanych Organizacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
            data: [
                {
                    name: `Nonprofit “Organization 1”`,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    tags: ["lorem ipsum"]
                },
                {
                    name: `Nonprofit “Organization 2”`,
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    tags: ["dolor sit amet"]
                },
                {
                    name: `Nonprofit “Organization 3”`,
                    description: "Sed posuere urna nec tincidunt praesent semper feugiat nibh.",
                    tags: ["lacus sed viverra tellus"]
                },
                {
                    name: `Nonprofit “Organization 4”`,
                    description: "Lectus proin nibh nisl condimentum id venenatis a condimentum.",
                    tags: ["dolor sit amet"]
                },
                {
                    name: `Nonprofit “Organization 5”`,
                    description: "Diam donec adipiscing tristique risus nec feugiat in fermentum.",
                    tags: ["lacus sed viverra tellus"]
                },
                {
                    name: `Nonprofit “Organization 6”`,
                    description: "Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.",
                    tags: ["lorem ipsum"]
                },
                {
                    name: `Nonprofit “Organization 7”`,
                    description: "Sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit.",
                    tags: ["dolor sit amet"]
                },
                {
                    name: `Nonprofit “Organization 8”`,
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    tags: ["volutpat commodo sed"]
                },
                {
                    name: `Nonprofit “Organization 9”`,
                    description: "Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.",
                    tags: ["donec adipiscing tristique"]
                }
            ]
        }


        return (
            <div className="who-we_help_component">
                <div className="who-we_help_title">
                    <h1>Komu pomagamy?</h1>
                    <img src={Decoration} alt="Decoration" />
                </div>
                <div className="choice-buttons">
                    <p onClick="">Fundacjom</p>
                    <p>Organizacjom <br />pozarządowym</p>
                    <p>Lokalnym <br />zbiórkom</p>
                </div>
                <div className="who-we_help_text">
                    <div className="who-we_help_text_inside">
                        <p>{Organizations.description}</p>
                    </div>
                </div>
                <Pagination 
                    foundations={Foundations.data}
                    organizations={Organizations.data}
                />
            </div>
        );
    }
};

export default WhoWeHelp;