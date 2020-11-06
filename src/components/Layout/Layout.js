import React from 'react';


export default function Layout(props) {
    return (
        <>
            <div>
                {props.children}
            </div>
            <footer>
                <div className="content has-text-centered">
                    <p style={{ marginBottom: '30px', }}>
                        <a href="/home"></a>
                    </p>
                </div>
            </footer>


        </>
    );
}