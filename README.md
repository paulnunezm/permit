# permit README

## Setup

### Install dependencies

Use hombre to install dependencies.

Mise is a tool version manager, can nvm, language versions, etc.

``` zsh
brew install ruby
brew install mise

# add mise to work in the terminal
echo 'eval "$(mise activate zsh)"' >> ~/.zshrc
eval "$(mise activate zsh)"

# set up ruby version
mise use -g ruby@3.4.3
```

### Initialize the database

```zsh
bin/rails db:migrate
bin/rails db:fixtures:load # load dummy data
```

### Running and testing the app

1. Start the server

```zsh
bin/dev
```

2. It normally goes to:

```
http://127.0.0.1:3100
```

3. Use one of these accounts

``` yaml
owner:  
    email: ray@katano.com
    password: password

owner:  
    email: its@carlos.com
    password: password
```

4. Metan mano.
