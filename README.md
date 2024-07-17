# Start-Up Support
## Empowering African Entrepreneurs

Welcome to StartupSupport, a platform dedicated to empowering African entrepreneurs by bridging the gap between innovative business ideas and the expertise required to bring them to life. Our mission is to provide essential guidance, resources, and networking opportunities to support entrepreneurs at every stage of their journey.
## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Our Mission](#our-mission)
- [Getting Started](#getting-started)
  
## Project Overview
StartupSupport aims to connect aspiring entrepreneurs with seasoned experts, offering a comprehensive suite of tools and resources to foster business growth and development. Our platform features an Integrated Mentorship and Advisory Program, as well as a Comprehensive Networking and Resource Hub, tailored to meet the unique needs of African startups.

## Features
### For Entrepreneurs:
#### Startup Resources: 
Access guides, templates, and industry-specific startup kits to kickstart your business.
Engage in online courses, video tutorials, and webinars from industry experts.
![Image](screens/resources.png)
#### Mentorship Programs: 
Connect with experienced mentors for personalized guidance.
![Image](screens/Connect.png)
#### Networking Events: 
Participate in events, workshops, and virtual networking sessions.
![Image](screens/Events.png)
### For Experts:
#### Profile Management:
Create and update your professional profile to showcase your expertise.
![Image](screens/Profile.png)
#### Resource Sharing: 
Upload and share educational content, articles, and templates.
![Image](screens/shareresource.png)
#### Event Hosting: 
Host events and Workshops.
![Image](screens/eventsetup.png)
#### Networking and Collaboration: 
Connect with other experts and participate in collaborative projects.
![Image](screens/Connect.png)
# Our Mission
At Milka StartupSupport, our mission is to empower African entrepreneurs by providing them with the essential expertise, resources, and network needed to launch and grow successful businesses. We strive to create a supportive ecosystem where innovative ideas can flourish, bridging the gap between aspiring business owners and seasoned industry experts. Through mentorship, education, and access to funding opportunities, we aim to drive economic growth and foster a thriving entrepreneurial community across Africa.

# Getting Started

To get started, follow the steps:

1. Clone the repository and navigate to the folder:
   ```bash
   git clone git@github.com:Ararsa-Derese/StartupSupport.git
   cd StartupSupport
   ```

2. Setting up the Backend:
   - Navigate to the backend repository:
	 ```bash
	 cd backend/
	 ```
   - Create a virtual environment and activate it:
	 ```bash
	 python3 -m venv env
	 source env/bin/activate
	 ```
   - Install the requirements:
	 ```bash
	 pip install -r requirements.txt
	 ```
   - Migrate the database:
	 ```bash
	 python manage.py migrate
	 ```
   - Run the server:
	 ```bash
	 python manage.py runserver
	 ```

3. Setting up the Front-end:
   - Open another terminal and navigate to the web folder:
	 ```bash
	 cd frontend/web
	 ```
   - Install necessary dependencies:
	 ```bash
	 npm install
	 ```
   - Build:
	 ```bash
	 npm run build
	 ```
   - Navigate to the parent folder (frontend):
	 ```bash
	 cd ..
	 ```
   - Install necessary dependencies for the Express:
	 ```bash
	 npm install
	 ```
   - Run the server:
	 ```bash
	 npm start
	 ```




