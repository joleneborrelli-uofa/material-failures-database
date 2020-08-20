// To store the timer
let timeout;

// 15 minutes in milliseconds
const fifteenMinutes = 900000;

// Stores the authetication token in 
// the singleton pattern
class Auth
{
    constructor()
    {
        this.isLoggedIn = false;
    }

    loginStatus()
    {
        return this.isLoggedIn;
    }

    login()
    {
        this.isLoggedIn = true;

        this.setTimerForLogout();
    }

    logout()
    {
        this.isLoggedIn = false;

        this.clearTimerForLogout()
    }

    setTimerForLogout()
    {
        timeout = window.setTimeout( this.logout.bind( this ), fifteenMinutes );
    }

    clearTimerForLogout()
    {
        window.clearTimeout( timeout );
    }
}

export default new Auth();
