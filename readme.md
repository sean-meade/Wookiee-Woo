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
    DATABASE_URL=postgres://username:password@hostname/databasename
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

9. **Run the Frontend Server:**

    ```bash
    npm start
    ```

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
