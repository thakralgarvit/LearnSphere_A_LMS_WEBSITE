export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                "course-details-headoing-small" : ["26px", "36px"],
                "course-details-headoing-large" : ["36px", "44px"],
                "home-heading-small" : ["28px", "34px"],
                "home-heading-large" : ["48px", "56px"],
                "dedfault" : ["15px", "21px"]
            }
        },
    },
    plugins: [],
}