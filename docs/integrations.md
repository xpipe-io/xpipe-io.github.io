# Integrations

On this page you can find an overview of what is currently supported.
If you would like to see something to be supported in the future,
feel free to open [ticket](https://github.com/xpipe-io/xpipe/issues).

## Operating systems

Supported operating systems:
- **Windows**: Windows 7 and later
- **Linux-based operating systems**: Obviously you can't test every single distro, but they should all work in principle
- **macOS**: Big Sur and later

Supported architectures:
- **x86_64**: Supported for all operating systems
- **arm64**: Supported for macOS

## Terminals

The [shell connection feature](connections/shell-connections) supports opening a terminal application for a specific shell connection.
You are free to choose which terminal application is used here in the settings menu.
The following terminals come with out-of-the-box support:

##### Windows (Terminal window only, independent of underlying shell)
- cmd
- PowerShell
- PowerShell Core
- Windows Terminal
- Tabby

##### Linux
- Gnome Terminal
- Konsole
- Xfce
- Terminator
- Kitty
- Terminology
- Cool Retro Term
- Guake
- Alacritty
- Tilda

##### macOS
- Terminal.app
- iTerm2
- Warp
- Tabby

Note that XPipe supports setting a custom terminal command in case your favorite terminal is not listed here.

### Text Editors

XPipe supports utilizing your favorite text editor to open or edit any kind of text-based data within XPipe.
The following text editors are currently supported out of the box:

##### Cross-platform
- Visual Studio Code
- Sublime Text

##### Windows
- Notepad
- Notepad++

##### Linux
- Kate
- GEdit
- Pluma
- Leafpad
- Mousepad

##### macOS
- TextEdit.app

Note that XPipe supports setting a custom text editor command in case your favorite editor is not listed here.

## Remote Systems

XPipe allows you to connect to any remote shell.
You are able to use existing shell connections to a certain host as a proxy for
connecting to another host, regardless of the connection method used.
The following ways of establishing a remote shell connection are currently supported:
- **SSH**: Password and key-based authentication, any key format should be supported
- **Window Subsystem for Linux**: Supported on any local and remote windows host. The instance
  does not have to be exposed to the public, only the host must be reachable
- **Docker**: Supported on any host, the container does not have to be exposed to the public, only the host must be reachable
- **LXD**: Supported on any host, the container does not have to be exposed to the public, only the host must be reachable

Furthermore, XPipe allows for the usage of a custom command-line command to open a shell connection.
In case your use connection method is not listed here, there is still
the possibility of it being able to be used by using a custom command.

There are two basic requirements for a remote system.
First, it has to have a shell installed.
This can sometimes be not the case for bare containers they don't even have `sh` installed.
Second, the file system has to be writable as XPipe will
create a few temporary files that are required in order for everything to function correctly.
