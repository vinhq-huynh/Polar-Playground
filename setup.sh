if [ -z "$CLOUD_SHELL" ]; then
  printf "Checking for required npm version...\n"

  npm install -g npm > /dev/null 2>&1
  printf "Completed.\n\n"

  printf "Setting up NVM...\n"
  export NVM_DIR="/usr/local/nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  printf "Completed.\n\n"
  
  printf "Updating nodeJS version...\n"
  nvm install --lts
  printf "Completed.\n\n"
fi

printf "Installing dependencies...\n"
npm install
printf "Completed.\n\n"