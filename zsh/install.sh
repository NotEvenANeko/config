#!/bin/sh

apt --version > /dev/null 2> /dev/null
isApt=$?
pacman --version > /dev/null 2> /dev/null
isPacman=$?
sudo --version > /dev/null 2> /dev/null
isSudo=$?

for arg in "$@"
do
  case "$arg" in
    "--unattended")
      isUnattended=1
    ;;
  esac
done

if [ -z "$isUnattended" ]; then
  if [ "$isSudo" -ne 0 ]; then
    echo "you need sudo to run this script."
    exit 1
  fi

  if [ "$isApt" -eq 0 ]; then
    sudo apt update && sudo apt upgrade -y
    sudo apt install zsh git curl wget neofetch thefuck vim -y
  elif [ "$isPacman" -eq 0 ]; then
    sudo pacman -Sy --noconfirm --needed which base zsh git curl wget neofetch thefuck vim
  fi
fi

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

curl -so $HOME/.zshrc https://raw.githubusercontent.com/Cattttttttt/config/master/zsh/.zshrc

curl -so $HOME/.p10k.zsh https://raw.githubusercontent.com/Cattttttttt/config/master/zsh/.p10k.zsh

curl -so $HOME/.vimrc https://raw.githubusercontent.com/Cattttttttt/config/master/vim/.vimrc

git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

if [ -z "$isUnattended" ]; then
  chsh -s $(which zsh)
  zsh
fi