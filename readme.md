# Project Name

## Table of Contents

- [User Stories](#user-stories)
- [Deployment](#deployment)
  - [Development Setup](#development-setup)
  - [Seeding Demo Users](#seeding-demo-users)
  - [Production Build and Deployment](#production-build-and-deployment)
- [Wireframes](#wireframes)
- [Color Scheme](#color-scheme)
- [Team Members](#team-members)
- [Technologies Used](#technologies-used)
- [Copyright Links](#copyright-links)

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

[https://wookie-woo-a4d53b6d7f27.herokuapp.com/](Wookie Woo Live Site)


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

## Seeding Demo Users

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

## Copyright links
- **Font:**

Wookie woo star wars font:

<a href="https://www.textstudio.com/">Font generator</a>
https://www.textstudio.com/logo/111/starwars

- **Music:**

Star wars main theme (no copyright)

https://www.youtube.com/watch?v=_vsoDqyyYWs

Background music:

https://pixabay.com/music/solo-piano-watching-the-stars-background-music-for-video-8756/

- **Sound effects:**

https://pixabay.com/sound-effects/lightsaber-clash-88733/

https://pixabay.com/sound-effects/saber-hummingwav-14651/


- **Transitions:**

https://www.vecteezy.com/video/29227655-cherry-blossom-falling-is-alpha-motion-footage-for-seasonal-films-and-

<a href="https://www.vecteezy.com/free-videos/pink">Pink Stock Videos by Vecteezy</a>

- **Effects:**

Lightsaber:
https://footagecrate.com/video-effects/footagecrate-lasersword-blue

https://footagecrate.com/video-effects/footagecrate-lasersword-damaged-red

- **Video clips:**

Anakin and Padme:

https://www.youtube.com/watch?v=juFzdkg4Rvw

Chewbacca moments:

https://www.youtube.com/watch?v=0W4xnv8HZjM

Kylo Ren rage scene:

https://www.youtube.com/watch?v=grtJjUmkJmk

Woman smiling:

https://www.pexels.com/video/a-happy-woman-with-a-big-smile-6706926/


- **Images:**

Stars background:

https://www.pexels.com/photo/starry-sky-998641/

Plo Koon:

https://nl.pinterest.com/pin/663577326325061405/

Leia and Han:

https://www.starwars.com/news/han-and-leia-why-theyre-perfect-together

AI image of Star wars fans:

hypergeek76_Star_wars_fans_falling_in_love_sci_fi_scene_c8a50842-7c14-4788-be4c-c3fea7cb9a72

Kylo Star Wars wallpaer:

https://wallpapercave.com/w/wp1884717

Storm trooper wallpaper:

https://wallpapercave.com/w/wp3390444

BB8 wallpaper:

https://wallpapercave.com/w/wp3614492

Star Wars designed wallpaper:

https://wallpapercave.com/w/wp2608227

Kylo Ren wallpaper:

https://wallpapercave.com/w/wp3614507

Star Wars mask wallpaper:

https://wallpapercave.com/w/wp3614510

Spaceship wallpaper:

https://wallpapercave.com/w/wp3614516

Star Wars Eclipse wallpaper:

https://www.uhdpaper.com/2021/10/star-wars-eclipse-lightsabers-4k-7931e.html?m=0#google_vignette

[Go To The Top](#table-of-contents)
