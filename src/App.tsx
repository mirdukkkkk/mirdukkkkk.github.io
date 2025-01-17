import { Component } from "preact";

import { renderExceptions } from "./data/routes";
import { BackgroundContext, BackgroundManager } from "./managers/background";
import { ColorContext, ColorManager } from "./managers/color";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Router from "./router";

import "./styles/font.styl";
import "./styles/index.styl";
import styles from "./styles/App.module.styl";

import "./helloConsole";

class App extends Component {
    isException = renderExceptions.includes(window.location.pathname);

    backgroundSwitcher = () => {
        return (
            BackgroundManager.isEnabled.value &&
            !this.isException && (
                <Background
                    starColor={BackgroundManager.starColor.value}
                    starSpeed={BackgroundManager.starSpeed.value}
                />
            )
        );
    };

    componentWillMount() {
        BackgroundManager.load();
    }

    render() {
        return (
            <BackgroundContext.Provider value={BackgroundManager}>
                <BackgroundContext.Consumer>
                    {this.backgroundSwitcher}
                </BackgroundContext.Consumer>
                <div className={styles.page_content}>
                    {!this.isException && (
                        <>
                            <Header />
                            <div className={styles.indent} />
                        </>
                    )}
                    <ColorContext.Provider value={ColorManager}>
                        <Router />
                    </ColorContext.Provider>
                </div>
            </BackgroundContext.Provider>
        );
    }
}

export default App;
