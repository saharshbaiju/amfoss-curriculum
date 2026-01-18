# task-06

This task is the continuation of the earlier task which is task-05 the frontend. I have used mysql and python flask for backend.
<br>

Here I will be just breifing how to setup mysql for this particular project

### 1.Creating the data base.<br>
`CREATE DATABASE melofi;`

### 2.Creating tables.<br>

#### In my project I used four tables:<br>

1. **users** - stores username and hashed password.

2. **playlists** - stores username and name of playlist with a unique id which is auto incremented(aka playlist id)

3. **playlists_items** - this stores all details of songs that are saved as playlist which includes preview url, track name, track id corresponding to their unique playlist id.

4. **recentlyplayed_items** - here is save the details of song which are played by username with primary key as user id and will get fetched for each user by their user id it also do have a default generated time stamp.

    - ## commands for each table:
        **users**: 
        
         `CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        password_hash VARCHAR(300) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`

        **playlists**:
         
         `CREATE TABLE playlists (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,username VARCHAR(100) NOT NULL,name VARCHAR(100) NOT NULL,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`

        **playlist_items**: 

        `CREATE TABLE playlist_items (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,playlist_id INT NOT NULL,track_id VARCHAR(50),track_name VARCHAR(300),artist_name VARCHAR(300),artwork_url VARCHAR(300),preview_url VARCHAR(300),added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`

        **recentlyplayed_items** :
        
        `CREATE TABLE recentlyplayed_items (id INT AUTO_INCREMENT PRIMARY KEY, track_id VARCHAR(50), track_name VARCHAR(300), artist_name VARCHAR(300), artwork_url VARCHAR(300), preview_url VARCHAR(300), added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, username VARCHAR(300));`

    
3. ### Updating with your mysql credentials<br>
   ```python
    def get_db():
    return mysql.connector.connect(
        host="",#add your host (mine was "localhost")
        user="",#add your user name
        password="",#add your password
        database="melofi",
        autocommit=True
    )```
   
- fill this line in app.py line 12 to 14 which is located inside melofi in the following path `melofi/backend/app.py`







