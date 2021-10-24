---
title: Version Control your Vim Settings
date: "2021-10-24T22:12:03.284Z"
description: "you'll wonder why you wern't already doing it"
---

I've used Vim as my main text editor for about the last two years.
I love having my entire workflow in the terminal.
Vim is highly configurable, I feel like I have full control of its UI, and behavior.

Here's a screenshot from my Vim setup showing a React component from this blog:

<div className="Image__Medium">
  <img src="./images/vim-screenshot-dark-mode.png" alt="vim screenshot" />
</div>

## Version controlling my Vim Config

A few months ago, I started version controlling [my Vim settings](https://github.com/hydrospanner/dotvim) and plugins.
Adding version control allows me to experiment without worrying I'll break anything.
I became more comfortable tinkering with it and saw an improvement in my productivity.

If I'm having a problem with my settings, I can ask the Vim community and link to my Vim settings on GitHub.

## Easy syncing between machines

I have a couple machines and virtual machines where I use Vim.
So I have the need to sync Vim plugins and settings between machines.

By version controlling everything, I can setup a new machine with

```shell
cd
git clone https://github.com/hydrospanner/dotvim.git .vim
echo "runtime vimrc" > .vimrc
# get the submodules (plugins)
cd .vim
git submodule init
git submodule update
```

or sync an existing `.vim/` directory with

```shell
git pull
git submodule init
git submodule update
```
