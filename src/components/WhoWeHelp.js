import React, { Component } from 'react';
import './App/App.scss';
import Decoration from '../assets/Decoration.svg';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: this.props.data,
            currentPage: 1,
            namesPerPage: 3,
            activePage: false
        }
    }

    handleClick = (event, i) => {
        this.setState({
            currentPage: i,
            activePage: true
        })
    };

    render() {
        const { currentPage, namesPerPage } = this.state;

        const indexOfLast = currentPage * namesPerPage;
        const indexOfFirst = indexOfLast - namesPerPage;
        const currentNames = this.props.data.slice(indexOfFirst, indexOfLast);

        const elements = currentNames.map((org, i) => {
            return (
                <>
                <div className="organizations-component_inside">
                    <div className="organizations-names">
                        <h1> {org.name} </h1>
                        <span> {org.description}</span>
                    </div>
                    <div className="organizations-tags">
                        <h5> {org.tags}</h5>
                    </div>
                </div>
                </>
            )
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.data.length / namesPerPage); i++) {
            const element = <li className={this.state.activePage ? "activePageTrue" : "activePageFalse"} key={i}
                onClick={e => this.handleClick(e,i)}
                // style={{border:this.state.border}}
                >
                {i}
            </li>
            pageNumbers.push(element)
        }

        return (
            <section>
                <div className="organizations-component">
                    <ul className="names">
                        {elements}
                    </ul>
                </div>
                <ul className="pagination">
                    {pageNumbers}
                </ul>
            </section>
        )
    }
};

class WhoWeHelp extends Component {

    constructor() {
        super();
        this.state = {
            userSelection: "Foundations",
            button1: true,
            button2: false,
            button3: false
        }
        // this.updateStyles = this.updateStyles.bind(this);
    }

    updateUserSelection = newSelection => {
        this.setState({
            userSelection: newSelection
        });
    }

    updateButtonOne = () => {
        this.setState({
            button1: true,
            button2: false,
            button3: false
        });
    }

    updateButtonTwo = () => {
        this.setState({
            button1: false,
            button2: true,
            button3: false
        });
    }

    updateButtonThree = () => {
        this.setState({
            button1: false,
            button2: false,
            button3: true
        });
    }

    render() {

        const Foundations = {
            description: "W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
            data: [
                {
                    name: "Nonprofit Foundation 1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    tags: "lorem ipsum"
                },
                {
                    name: "Nonprofit Foundation 2",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    tags: "dolor sit amet"
                },
                {
                    name: "Nonprofit Foundation 3",
                    description: "Sed posuere urna nec tincidunt praesent semper feugiat nibh.",
                    tags: "lacus sed viverra tellus"
                },
                {
                    name: "Nonprofit Foundation 4",
                    description: "Lectus proin nibh nisl condimentum id venenatis a condimentum.",
                    tags: "dolor sit amet"
                },
                {
                    name: "Nonprofit Foundation 5",
                    description: "Diam donec adipiscing tristique risus nec feugiat in fermentum.",
                    tags: "lacus sed viverra tellus"
                },
                {
                    name: "Nonprofit Foundation 6",
                    description: "Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.",
                    tags: "lorem ipsum"
                },
                {
                    name: "Nonprofit Foundation 7",
                    description: "Sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit.",
                    tags: "dolor sit amet"
                },
                {
                    name: "Nonprofit Foundation 8",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    tags: "volutpat commodo sed"
                },
                {
                    name: "Nonprofit Foundation 9",
                    description: "Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.",
                    tags: "donec adipiscing tristique"
                }
            ]
        }
        const Organizations = {
            description: "W naszej bazie znajdziesz listę zweryfikowanych organizacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
            data: [
                {
                    name: `Nonprofit “Organization 1”`,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    tags: "lorem ipsum"
                },
                {
                    name: `Nonprofit “Organization 2”`,
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    tags: "dolor sit amet"
                }
            ]
        }
        const LocalCollections = {
            description: "W naszej bazie znajdziesz listę zweryfikowanych lokalnych zbiórek, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
            data: [
                {
                    name: `Nonprofit “Local Collection 1”`,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    tags: "lorem ipsum"
                },
                {
                    name: `Nonprofit “Local Collection 2”`,
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    tags: "dolor sit amet"
                },
                {
                    name: `Nonprofit “Local Collection 3”`,
                    description: "Sed posuere urna nec tincidunt praesent semper feugiat nibh.",
                    tags: "lacus sed viverra tellus"
                },
                {
                    name: `Nonprofit “Local Collection 4”`,
                    description: "Lectus proin nibh nisl condimentum id venenatis a condimentum.",
                    tags: "dolor sit amet"
                },
                {
                    name: `Nonprofit “Local Collection 5”`,
                    description: "Diam donec adipiscing tristique risus nec feugiat in fermentum.",
                    tags: "lacus sed viverra tellus"
                }
            ]
        }

        let selected;

        if(this.state.userSelection === "Organizations"){
            selected = Organizations;
        } else if (this.state.userSelection === "Foundations") {
            selected = Foundations;
        } else if (this.state.userSelection === "LocalCollections") {
            selected = LocalCollections;
        }
        
        return (
            <div className="who-we_help_component">
                <div className="who-we_help_title">
                    <h1>Komu pomagamy?</h1>
                    <img src={Decoration} alt="Decoration" />
                </div>
                <div className="choice-buttons">
                    <p className={this.state.button1 ? "buttonTrue" : "buttonFalse"} onClick={() => {
                        this.updateUserSelection("Foundations")
                        this.updateButtonOne()
                    }}>Fundacjom</p>
                    <p className={this.state.button2 ? "buttonTrue" : "buttonFalse"} onClick={() => {
                        this.updateUserSelection("Organizations")
                        this.updateButtonTwo()
                    }}>Organizacjom <br />pozarządowym</p>
                    <p className={this.state.button3 ? "buttonTrue" : "buttonFalse"} onClick={() => {
                        this.updateUserSelection("LocalCollections")
                        this.updateButtonThree()
                    }}>Lokalnym <br />zbiórkom</p>
                </div>
                <div className="who-we_help_text">
                    <div className="who-we_help_text_inside">
                        <p>{selected.description}</p>
                    </div>
                </div>
                <Pagination data={selected.data} />
            </div>
        );
    }
};

export default WhoWeHelp;