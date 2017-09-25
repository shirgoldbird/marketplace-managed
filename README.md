# Marketplace Managed™

Marketplace Managed™ (working title) is a React app built on Airtable. It allows exhibitors applying to and accepted for the BronyCon Marketplace to log in, view important information, and manage their data in one location.

## Getting Started

This project was built on node v7.3.0 and npm v5.4.2.

### Prerequisites
```
node >=8.5.0
npm ~5.0.0
nodemon ~1.12.0

```

- Airtable API key (for your account)
- Airtable base ID (you'll need to be added to the BronyCon Marketplace team)


### Installing
Create a .env file in the root directory and add the following lines (with the correct values filled in):

```
REACT_APP_AIRTABLE_API_KEY=key
REACT_APP_AIRTABLE_BASE=base
```

Then:
```
npm install
REACT_APP_AIRTABLE_API_KEY=key REACT_APP_AIRTABLE_BASE=base npm start
```

For now we nee to put these environment variables outside fo the `npm start` in order for them to be utilized by the server. Figuring out how to make this not needed is something down the line.

It should be running on localhost:3000.

## Authors

* **Sheva Goldberg** - [Github](https://github.com/ShevaDas)
* **Josh Dean** - [Github](https://github.com/imjoshdean)

MORE TO COME SOON???

## Roadmap
[Check it out!](https://docs.google.com/document/d/1a1S1LoKzIzgyF_PXAvsOJ61l8HTJKE1SwUg5w210kak/edit)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
