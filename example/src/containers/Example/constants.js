import React from 'react'

export const PANELS = [
    {
        key: 'about',
        title: 'About this project',
        content: {
            content: (
                <div>
                    <p>Use this library to provide a custom in-app install experience to your visitors</p>
                    <p>It will automatically show / hide the button depending of the navigator's support and if the app has already been instaled</p>
                </div>
            )
        }
    },
    {
        key: 'requirements',
        title: 'Requirements',
        content: {
            content: (
                <div>
                    <p>In order to be installable, your webapp must meet the following criteria</p>
                    <ul>
                        <li>Be served over HTTPS</li>
                        <li>Includes a manifest.json</li>
                        <li>Register a service worker</li>
                    </ul>
                    <p>More info <a href="https://web.dev/install-criteria/" target="_blank" rel="noreferrer">on web.dev</a></p>
                </div>
            )
        },
    }
]