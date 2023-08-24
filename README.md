#### Routes

##### instrument routes

| HTTP verb | URL                              | Request body | Action                                   |
| --------- | -------------------------------- | ------------ | ---------------------------------------- |
| GET       | `/api/instruments`               | (empty)      | Returns all the instrument you can learn |
| POST      | `/api/instruments`               | JSON         | Adds a new instrument                    |
| GET       | `/api/instruments/:instrumentId` | (empty)      | Returns the specified instrument         |
| PUT       | `/api/instruments/:instrumentId` | JSON         | Edits the specified instrument           |
| DELETE    | `/api/instruments/:instrumentId` | (empty)      | Deletes the specified instrument         |

##### lesson routes

| HTTP verb | URL                      | Request body | Action                       |
| --------- | ------------------------ | ------------ | ---------------------------- |
| GET       | `/api/lessons`           | (empty)      | Returns all the lessons      |
| POST      | `/api/lessons`           | JSON         | Adds a new lesson            |
| GET       | `/api/lessons/:lessonId` | (empty)      | Returns the specified lesson |
| PUT       | `/api/lessons/:lessonId` | JSON         | Edits the specified lesson   |
| DELETE    | `/api/lessons/:lessonId` | (empty)      | Deletes the specified lesson |

##### group routes

| HTTP verb | URL                     | Request body | Action                      |
| --------- | ----------------------- | ------------ | --------------------------- |
| GET       | `/api/groups`           | (empty)      | Returns all the groups      |
| POST      | `/api/groups`           | JSON         | Adds a new group            |
| GET       | `/api/groups/:groupsId` | (empty)      | Returns the specified group |
| PUT       | `/api/groups/:groupsId` | JSON         | Edits the specified group   |
| DELETE    | `/api/groups/:groupsId` | (empty)      | Deletes the specified group |

##### message routes

| HTTP verb | URL                        | Request body | Action                        |
| --------- | -------------------------- | ------------ | ----------------------------- |
| GET       | `/api/messages/:messageId` | (empty)      | Returns the specified message |
| POST      | `/api/messages`            | JSON         | Adds a new message            |
| DELETE    | `/api/messages/:messageId` | (empty)      | Deletes the specified group   |

##### User routes

| HTTP verb | URL                           | Request Headers | Action                        |
| --------- | ----------------------------- | --------------- | ----------------------------- |
| GET       | `/api/users/:userId`          | (empty)         | returns user details          |
| PUT       | `/api/users/:userId`          | (empty)         | update user details           |
| GET       | `/api/users/:userId/lessons`  | (empty)         | returns list of users lessons |
| GET       | `/api/users/:userId/groups`   | (empty)         | returns list of users groups  |
| POST       | `/api/users/:userId/groups`   | (empty)         | add user to a group         |
| GET       | `/api/users/:userId/messages` | (empty)         | returns users messages        |

##### Auth routes

| HTTP verb | URL            | Request Headers                 | Request Body              |
| --------- | -------------- | ------------------------------- | ------------------------- |
| POST      | `/auth/signup` | --                              | { email, password, name } |
| POST      | `/auth/login`  | --                              | { email, password }       |
| GET       | `/auth/verify` | Authorization: Bearer \< JWT \> | --                        |

<hr>

## Pages

- Landing Page (public)
- Signup Page (anon only)
- Log in Page (anon only)
- Instruments
  - Instrument List Page (public)
  - Instrument Details Page (public)
  - Edit Instrument Page (admin only)
- Groups
  - Group Timetable Page (public)
  - Group Details Page (public)
  - Edit Group Page (admin only)
- Lessons
  - Edit Lessons Page (admin only)
- Messages
  - Trial Lesson (public)
  - Standard Message (public)
- User Profile Page (user only)
- Admin Profile Page (admin only)
- Error Page (public)

## Components

- NavBar
- Instruments
  - Instrument Card
  - Add Instrument
  - Instrument Thumbnail Card
- Groups
  - Group Card
  - Add Group
  - Group Thumbnail Card
- Lessons
  - Lesson Card
  - Add Lesson
- IsAnon
- IsPrivate

## Services

- Auth Service

  - auth.login(user)
  - auth.signup(user)
  - auth.logout()

- Instrument Service

  - createInstrument(requestBody)
  - getAllInstruments()
  - getInstrument(id)
  - updateInstrument(id, requestBody)
  - deleteInstrument(id)

- Group Service

  - createGroup(requestBody)
  - getAllGroups()
  - getGroup(id)
  - updateGroup(id, requestBody)
  - deleteGroup(id)

- Lesson Service

  - createLesson(requestBody)
  - getLesson(id)
  - updateLesson(id, requestBody)
  - deleteLesson(id)

- Message Service
  - createMessage(requestBody)
  - getMessage (userId)

#### Models

##### instrument Model

```js
{
instrument: String,
teacher: String,
description: String,
location: String,
imageURL: String,
lessons:
    user: Schema.Types.ObjectId, ref: "user",
    time: Time,
}


```

##### group Model

```js
{
  title: String,
  startTime: String,
  endTime: String,
  location: String,
  leader: String,
  imageURL: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'user' }]
}
```

##### User Model

```js
{
  email: String, unique, required,
  password: String, required,
  name:  String, required,
  isAdmin:  Boolean,
  address:  String,
  phone:   String,
  imageURL: String
}
```

##### Message Model

```js
{
  title: String,
  message: String,
  sender: Schema.Types.ObjectId, ref: "user",
  senderName: String,
  senderEmail: String,
  recipient: Schema.Types.ObjectId, ref: "user",
  timeStamp: Date,
}
```
