import * as React from "react";
import { hot } from "react-hot-loader/root";
import { MyType } from "shared/types/mytypes";
import {useEffect, useState} from "react";

interface State {
  isLoaded: boolean;
  value: MyType | null;
}

const initialAppState: State = {
    isLoaded: false,
    value: null,
}

export const App = () => {
    const [appState, setAppState] = useState(initialAppState);

    useEffect(() => {
        fetch("/api/")
            .then(res => res.json())
            .then(
                value => {
                    setAppState({
                        isLoaded: true,
                        value
                    });
                },
                error => {
                    console.log(error);
                    setAppState({
                        isLoaded: true,
                        value: {
                            success: false,
                            errorMessage: "network error"
                        }
                    });
                }
            );
    }, [])


    const renameImage = () => {
        fetch("/api/image-size")
            .then(res => res.json())
            .then(
                value => {
                    setAppState({
                        isLoaded: true,
                        value
                    });
                },
                error => console.log(error)
            )
    }

    return (
        <div className="myclass">
            <h1>My App</h1>
            {!appState.isLoaded && <p>Loading...</p>}
            <button onClick={renameImage}>Download named picture</button>
        </div>
    );
}

export default hot(App);
