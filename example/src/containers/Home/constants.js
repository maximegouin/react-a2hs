import React from 'react'

export const SHOW_SIDEBAR = "SHOW_SIDEBAR"
export const SET_SHOW_SERVICE_WORKER_MODAL = "SET_SHOW_SERVICE_WORKER_MODAL"

export const PANELS_APP_PILLARS = [
    {
        key: 'capable',
        title: 'Capable',
        content: {
            content: (
                <div>
                    <p>The web is quite capable in its own right today. For example, you can build a hyper-local video chat app using WebRTC, geolocation, and push notifications.</p>
                </div>
            )
        }
    },
    {
        key: 'reliable',
        title: 'Reliable',
        content: {
            content: (
                <div>
                    <p>A reliable Progressive Web App feels fast and dependable regardless of the network.</p>
                    <p>Users expect apps to start up on slow or flaky network connections or even when offline. They expect the most recent content they've interacted with, like media tracks or tickets and itineraries, to be available and usable even if getting a request to your server is hard. When a request isn't possible, they expect to be told there's trouble instead of silently failing or crashing.</p>
                </div>
            )
        },
    },
    {
        key: 'installable',
        title: 'Installable',
        content: {
            content: (
                <div>
                    <p>Installed Progressive Web Apps run in a standalone window instead of a browser tab. They're launchable from on the user's home screen, dock, taskbar, or shelf. It's possible to search for them on a device and jump between them with the app switcher, making them feel like part of the device they're installed on.</p>
                    <p>In order to be installable, your webapp must meet the following criteria</p>
                    <ul>
                        <li>Be served over HTTPS</li>
                        <li>Includes a manifest.json</li>
                        <li>Register a service worker</li>
                    </ul>
                </div>
            )
        },
    }
]