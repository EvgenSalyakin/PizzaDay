import { Component } from 'react';

export default class Layout extends Component {
        render() {
            return (
                <div className="container-fluid">
                    <header>
                        <h1 className="text-xs-center">Pizza Day</h1>
                        <div className="row text-xs-right">
                            {this.props.fbContent}
                        </div>
                    </header>
                    <div className="content">
                            {this.props.content}
                    </div>
                    <footer>
                        <p className="text-xs-center">Copyright &copy; 2016 by SkyOrion</p>
                    </footer>
                </div>
            );
        }
}


