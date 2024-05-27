# Wookie Woo

## Welcome to Wookie Woo: Where the Force is Strong with Love

Calling all Star Wars fans from galaxies near and far! Whether you're a Jedi, a Sith, or somewhere in between, Wookie Woo is your ultimate destination to find love among the stars. Here, you'll connect with people who share your passion for all things Star Wars.

Tired of debating whether Han shot first with people who just don't get it? Dreaming of meeting someone who loves the original trilogy as much as you do? Or maybe you're a fan of the entire Star Wars universe and want a partner who appreciates every corner of the galaxy?

Join us at Wookie Woo and embark on a journey where your Star Wars fandom leads the way. Our advanced onboarding survey helps you rank your preferences across the vast Star Wars media, ensuring you meet someone who truly understands your love for this epic saga.

Sign up now, complete the survey, and may the Force be with you on your quest for love!

- [Wookie Woo Live Site](https://wookie-woo-a4d53b6d7f27.herokuapp.com/)

## Table of Contents

- [User Stories](#user-stories)
- [Backend Models](#backend-models)
- [Wireframes](#wireframes)
- [Color Scheme](#color-scheme)
- [Reusable components](#reusable-components)
- [Team Members](#team-members)
- [Technologies Used](#technologies-used)
- [Technologies Used](#technologies-used)
- [Copyright links](#copyright-links)
- [Deployment](#deployment)
  - [Development Setup](#development-setup)
  - [Seeding Demo Users](#seeding-demo-users)
  - [Production Build and Deployment](#production-build-and-deployment)
- [Attributions](#attributions)

## User Stories

### Profile Management

- As a user, I want to be able to edit my profile because I might have made a mistake or want to update it.
- As a user, I want to fill out my own profile because I want to be able to create my own page.
- As a new user, I want to be able to delete my account because I might have found the Leia to my Han.

### Matching and Preferences

- As a user, I want to match with another user who I am interested in and who is interested in me.
- As a user, I want to be matched with other users based on my rankings because I don't want to date anyone who likes Jar Jar Binks.
- As a user, I want to rank Star Wars movies/shows because I want the most accurate matching with other users.
- As a user, I want to edit my rankings because my tastes may change or I might have made a mistake.
- As a user, I want to view my matches and their details on my page because I want to be able to easily view the details of my matches.
- NTH - As a user, I want to be able to rank characters because I want to match with people who like similar characters.
- NTH - As a user, I want to view other users' profiles after suggested matching because I want to be able to decide whether to match or not.
- NTH - As a user, I want to view my own profile because I want to be able to view my own details.

## Additional Tasks and Features

### Frontend Development

- Frontend authentification and CRUD.
- Frontend rating component.
- Create about us page - Frontend.

### Backend Development

- Routing for 404, landing page, about me page in Django.
- Make ERDs.
- Gather images/media/sound clips/gifs/useful links for project.

### Miscellaneous

- Intro video.

[Go To The Top](#table-of-contents)

## Backend Models

### profiles/models.py

This file (`profiles/models.py`) defines database models related to user profiles. It includes a `CustomUser` model derived from Django's `AbstractUser`, allowing for customization of user profiles. Fields such as `force_alignment`, `gender`, `looking_for`, and `profile_icon` are provided for users to specify their preferences and characteristics. Additionally, there's a `UserProfile` model linked to each user profile, enabling the storage of additional information like a user's biography (`bio`).

### matchmaking/models.py

Contained within `matchmaking/models.py`, this file encompasses models associated with matchmaking features. One notable model is `FilmResults`, designed to store ratings of various Star Wars films provided by users. The fields within this model allow users to rate each film on a scale from 1 to 10, enabling matchmaking algorithms to recommend compatible users based on shared film preferences.

[Go To The Top](#table-of-contents)

## Wireframes

Wireframes by Alma Isaksson

[Go To The Top](#table-of-contents)

## Color Scheme

In designing the color palette for this project, a tertiary color wheel analysis approach was utilized. This method involves selecting a primary color, then finding secondary and tertiary colors that complement and enhance the overall aesthetic. Here's a breakdown of how the colors were chosen and their roles in the design:

### Colors Used

- **Primary Color: #cf4f50 (Red)**
  - This vibrant red serves as the main highlight color, providing energy and focus to key elements.
  
- **Secondary Color: #243145 (Blue)**
  - The deep blue acts as a strong, stable base color, suitable for backgrounds, text, and other primary elements.
  
- **Tertiary Color: #ecc6c6 (Light Pink)**
  - A soft pastel pink was chosen as a tertiary color to create harmony and add a gentle, complementary touch to the palette.
  
- **Neutral Color: #f5f5f5 (Light Gray)**
  - Light gray is used as a neutral background to keep the design clean and unobtrusive, allowing other colors to stand out.
  
- **Complementary Color: #ff9800 (Orange)**
  - Orange was selected as a complementary color to the blue, adding warmth and

[Go To The Top](#table-of-contents)

## Reusable components

### Home

**Description:** The `Home` component is the main landing page of the application. It displays a welcoming message and placeholder content that can be customized with additional components and information as needed for development purposes.

### NavBar

**Description:** The `NavBar` component provides a responsive navigation bar for the application. It displays different navigation options based on the user's authentication status. Authenticated users see links to their profile and a sign-out option, while unauthenticated users see sign-in and sign-up options. The navigation bar collapses on smaller screens and can be toggled open or closed. The component also uses a custom hook to handle clicks outside the navbar to close it automatically.

### Register

**Description:** The `Register` component provides a registration form for new users to create an account. It handles the registration process by taking the username, email, and password, validating the input, and submitting the data to the authentication context. Upon successful registration, a success toast notification is displayed, and the user is redirected to the login page. If the registration fails, an error toast notification is shown.

### Login

**Description:** The `Login` component provides a login form for users to enter their credentials. It handles the authentication process by taking the username and password, submitting them to the authentication context, and navigating to the home page upon successful login. If the login attempt fails, an error message is logged.

### UserDetail

**Description:** The `UserDetail` component fetches and displays detailed information about a specific user. It retrieves user data from the backend server based on the user ID extracted from the route parameters. Once the data is fetched, it is displayed within a Bootstrap Card component, showing the user's username, email, and bio. The component includes loading and error handling states to provide feedback to the user during the data fetching process.

### EditProfile

**Description:** The `EditProfile` component allows users to update their profile information, including their username, email, and bio. Upon rendering, it fetches the user's profile data from the backend using the authentication token. Users can then modify their profile information in the form fields provided. Upon submission, the updated profile data is sent to the backend server via an Axios PUT request. Toast notifications are displayed to indicate the success or failure of the update operation.

### DeleteProfile

**Description:** The `DeleteProfile` component provides functionality for users to delete their profile. It includes a button labeled "Delete Profile" that, when clicked, triggers the deletion process. Upon successful deletion, a toast notification is displayed indicating the success and the user is logged out. They are then redirected to the home page. If the deletion fails, an error toast notification is shown.

### StarWarsSurvey

**Description:** The `StarWarsSurvey` component renders a form for users to fill out a Star Wars compatibility survey. It includes fields for users to select their preferences regarding the Star Wars trilogy, favorite character, movie or show, era, preferred faction, force ability, engagement level, importance of Star Wars in their life, openness to new media, and preferred date activity related to Star Wars. Upon submission, the form data is sent to the backend server via an Axios POST request to the `http://localhost:5000/surveyResults` endpoint.

### Survey

**Description:** The `Survey` component renders a form for users to submit their ratings for two movies. Users can enter their ratings for each movie and submit the form. Upon submission, the survey data is sent to the backend server via an Axios POST request, including the ratings for the two movies, the user's username retrieved from the authentication context, and the authentication token. If the submission is successful, the user is redirected to the home page.

### Ranking

**Description:** The `Ranking` component allows users to rate an item using a star rating system. It displays five stars, and users can hover over them to preview their rating or click to select a rating. Once a rating is selected, it is saved to the backend via an Axios POST request to the `/api/rate` endpoint, along with the `item_id` and the selected `rating`. The component utilizes state to manage the current rating value and the hover state for previewing ratings.

[Go To The Top](#table-of-contents)

## Team Members

- **Alma Isaksson** - "Rebellions are built on hope."
- **Anwar Dawoud** - "Dream big, work hard, stay focused, and surround yourself with good people."
- **Dennis Mariegaard Jensen** - "Mawaa na jee-jee" (Never give up).
- **Rob Dawson** - "Never tell me odds!"
- **Seán Meade** - "Life is like a box of chocolate, you never know what you're gonna' get."
- **Sean Tilson** - "I don't know, fly casual."
- **Wehlia Kahin** - "Yoda best for real! Believe it!"

[Go To The Top](#table-of-contents)

## Technologies Used

### Backend

- Python
  - [Documentation](https://www.python.org/doc/)
- Django
  - [Documentation](https://docs.djangoproject.com/en/stable/)

#### Database

- PostgreSQL (for production)
  - [Documentation](https://www.postgresql.org/docs/)
- SQLite (for development)

### Frontend

- JavaScript
- React
  - [Documentation](https://reactjs.org/docs/getting-started.html)

### Deployment Platform

- Heroku
  - [Documentation](https://devcenter.heroku.com/)

[Go To The Top](#table-of-contents)

## Copyright links

- **Font:**

  - Wookie woo star wars font:

      [Font generator](https://www.textstudio.com/)

      [Star Wars Logo Generator](https://www.textstudio.com/logo/111/starwars)

- **Music:**

  - Star wars main theme (no copyright)

      [YouTube Link](https://www.youtube.com/watch?v=_vsoDqyyYWs)

  - Background music:

      [Background Music](https://pixabay.com/music/solo-piano-watching-the-stars-background-music-for-video-8756/)

  - Sound effects:

      [Sound Effect: Lightsaber Clash](https://pixabay.com/sound-effects/lightsaber-clash-88733/)

      [Sound Effect: Saber Humming](https://pixabay.com/sound-effects/saber-hummingwav-14651/)

  - Transitions:

      [Cherry Blossom Falling](https://www.vecteezy.com/video/29227655-cherry-blossom-falling-is-alpha-motion-footage-for-seasonal-films-and-)

      [Pink Stock Videos by Vecteezy](https://www.vecteezy.com/free-videos/pink)

  - Effects:

      [Lightsaber - Blue](https://footagecrate.com/video-effects/footagecrate-lasersword-blue)

      [Lightsaber - Damaged Red](https://footagecrate.com/video-effects/footagecrate-lasersword-damaged-red)

- **Video clips:**

  - Anakin and Padme:

      [YouTube Video](https://www.youtube.com/watch?v=juFzdkg4Rvw)  

  - Chewbacca moments:

      [YouTube Video](https://www.youtube.com/watch?v=0W4xnv8HZjM)

  - Kylo Ren rage scene:

      [YouTube Video](https://www.youtube.com/watch?v=grtJjUmkJmk)

  - Woman smiling:

      [Pexels Video](https://www.pexels.com/video/a-happy-woman-with-a-big-smile-6706926/)

- **Images:**

  - Stars background:

      [Pexels Photo](https://www.pexels.com/photo/starry-sky-998641/)

  - Plo Koon:

      [Pinterest Link](https://nl.pinterest.com/pin/663577326325061405/)

  - Leia and Han:

      [Star Wars Article](https://www.starwars.com/news/han-and-leia-why-theyre-perfect-together)

  - AI image of Star wars fans:

    ![Star Wars Fans Falling in Love Sci-Fi Scene](wireframe-images\media\hypergeek76_Star_wars_fans_falling_in_love_sci_fi_scene_c8a50842-7c14-4788-be4c-c3fea7cb9a72.png)

  - Kylo Star Wars wallpaer:

      [Wallpaper Cave](https://wallpapercave.com/w/wp1884717)

  - Storm trooper wallpaper:

      [Wallpaper Cave](https://wallpapercave.com/w/wp3390444)

  - BB8 wallpaper:

      [Wallpaper Cave](https://wallpapercave.com/w/wp3614492)

  - Star Wars designed wallpaper:

      [Wallpaper Cave](https://wallpapercave.com/w/wp2608227)

  - Kylo Ren wallpaper:

      [Wallpaper Cave](https://wallpapercave.com/w/wp3614507)

  - Star Wars mask wallpaper:

      [Wallpaper Cave](https://wallpapercave.com/w/wp3614510)

  - Spaceship wallpaper:

      [Wallpaper Cave](https://wallpapercave.com/w/wp3614516)

  - Star Wars Eclipse wallpaper:

      [uhdpaper](https://www.uhdpaper.com/2021/10/star-wars-eclipse-lightsabers-4k-7931e.html?m=0#google_vignette)

[Go To The Top](#table-of-contents)

## Deployment

### Development Setup

To set up the project for development, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2. **Create and Activate a Virtual Environment:**

    ```bash
    # On macOS/Linux:
    python3 -m venv env
    source env/bin/activate

    # On Windows:
    python -m venv env
    .\env\Scripts\activate
    ```

3. **Install Backend Dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Create a `.env` File in the Root Directory:**

    ```plaintext
    DEBUG=True
    SECRET_KEY=your-very-secret-key
    DATABASE_URL=postgres://username:password@hostname/databasename # Don't add this line if you want to default to SQLite
    ALLOWED_HOSTS=localhost,127.0.0.1
    ```

5. **Create a `.env` File directly in the frontend:**

    ```plaintext
    REACT_APP_SITE_BASE_URL="http://127.0.0.1:8000/auth/"
    ```

6. **Apply Migrations:**

    ```bash
    python manage.py makemigrations
    ```

7. **Apply Migrations:**

    ```bash
    python manage.py migrate
    ```

8. **Run the Development Server:**

    ```bash
    python manage.py runserver
    ```

9. **Set Up Frontend:**

    ```bash
    cd frontend
    ```

10. **Install Frontend Dependencies:**

    ```bash
    npm install
    ```

11. **Build the Frontend:**

    ```bash
    npm run build
    ```

12. **Run the Frontend Server:**

    ```bash
    npm start
    ```

[Go To The Top](#table-of-contents)

### Seeding Demo Users

This project includes a custom Django management command to seed the database with demo users for testing and development purposes. Follow the steps below to use this command.

#### To Seed Demo Users

To seed the database with demo users, run the following command:

```bash```
python manage.py seed_demo_users

[Go To The Top](#table-of-contents)

### Production Build and Deployment

To prepare and serve the project for production, follow these steps:

1. **Create and Activate a Virtual Environment (if not already done):**

    ```bash
    # On macOS/Linux:
    python3 -m venv env
    source env/bin/activate

    # On Windows:
    python -m venv env
    .\env\Scripts\activate
    ```

2. **Install Backend Dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

3. **Create a `.env` File in the Root Directory:**

    ```plaintext
    DEBUG=False
    SECRET_KEY=your-very-secret-key
    DATABASE_URL=postgres://username:password@hostname/databasename
    ALLOWED_HOSTS=your-production-domain.com
    ```

4. **Apply Migrations:**

    ```bash
    python manage.py migrate
    ```

5. **Collect Static Files:**

    ```bash
    python manage.py collectstatic
    ```

6. **Build the Frontend:**

    ```bash
    cd frontend
    npm install  # If not already done
    npm run build
    ```

    Make sure the `build` directory of your React app is inside the `frontend` directory.

[Go To The Top](#table-of-contents)

## Attributions

The following is a list of third-party dependencies used in this project, along with their respective licenses and attributions:

| Dependency                     | License         | Attribution Required? | Source/Documentation                                               |
|--------------------------------|-----------------|-----------------------|--------------------------------------------------------------------|
| asgiref==3.8.1                 | BSD-3-Clause    | No                    | [GitHub](https://github.com/django/asgiref)                        |
| dj-database-url==2.1.0         | MIT             | No                    | [GitHub](https://github.com/kennethreitz/dj-database-url)         |
| Django==5.0.6                  | BSD             | No                    | [GitHub](https://github.com/django/django)                        |
| django-cors-headers==4.3.1     | MIT             | No                    | [GitHub](https://github.com/adamchainz/django-cors-headers)       |
| django-environ==0.11.2         | MIT             | No                    | [GitHub](https://github.com/joke2k/django-environ)                |
| djangorestframework==3.15.1    | BSD-3-Clause    | No                    | [GitHub](https://github.com/encode/django-rest-framework)         |
| djangorestframework-simplejwt==5.3.1 | MIT     | No                    | [GitHub](https://github.com/jazzband/django-rest-framework-simplejwt) |
| gunicorn==22.0.0               | MIT             | No                    | [GitHub](https://github.com/benoitc/gunicorn)                     |
| packaging==24.0                | BSD-3-Clause    | No                    | [GitHub](https://github.com/pypa/packaging)                       |
| psycopg2==2.9.9                | LGPL            | No                    | [GitHub](https://github.com/psycopg/psycopg2)                     |
| psycopg2-binary==2.9.9         | LGPL            | No                    | [GitHub](https://github.com/psycopg/psycopg2-binary)              |
| PyJWT==2.8.0                   | MIT             | No                    | [GitHub](https://github.com/jpadilla/pyjwt)                       |
| sqlparse==0.5.0                | BSD             | No                    | [GitHub](https://github.com/andialbrecht/sqlparse)                |
| typing_extensions==4.11.0      | PSF             | No                    | [GitHub](https://github.com/python/typing)                        |
| tzdata==2024.1                 | Public Domain   | No                    | [IANA Time Zone Database](https://www.iana.org/time-zones)       |
| whitenoise==6.6.0              | MIT             | No                    | [GitHub](https://github.com/evansd/whitenoise)                    |

[Go To The Top](#table-of-contents)
