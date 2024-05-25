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
    DATABASE_URL=postgres://username:password@hostname/databasename #Dont add this line if you want to default to SQlite
    ALLOWED_HOSTS=localhost,127.0.0.1
    ```

5. **Apply Migrations:**

    ```bash
    python manage.py migrate
    ```

6. **Run the Development Server:**

    ```bash
    python manage.py runserver
    ```

7. **Set Up Frontend:**

    ```bash
    cd frontend
    ```

8. **Install Frontend Dependencies:**

    ```bash
    npm install
    ```

9. **Build the Frontend:**

    ```bash
    npm run build
    ```

10. **Run the Frontend Server:**

    ```bash
    npm start
    ```
## Seeding Demo Users

This project includes a custom Django management command to seed the database with demo users for testing and development purposes. Follow the steps below to use this command.

### Seeding Demo Users

To seed the database with demo users, run the following command:

```bash
python manage.py seed_demo_users


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

<<<<<<< 14-add-authentification-and-elaborated-model-and-view-logic-to-profiles---backend
Wireframes by Alma Isaksson
=======
Wireframes by Alma Isaksson

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
  - Orange was selected as a complementary color to the blue, adding warmth and creating a striking contrast when needed.
  
- **Analogous Color: #ff6f61 (Coral)**
  - Coral, an analogous color to the primary red, provides additional variety and can be used for accents to maintain visual cohesion.

  ![Color Palette](https://res.cloudinary.com/dgvipn16a/image/upload/v1716555532/colorscheme_f1exrx.png)
>>>>>>> main
