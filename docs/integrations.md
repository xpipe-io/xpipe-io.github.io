# Integrations

X-Pipe aims to support all kinds of formats and technologies,
and also to integrate well with other existing tools and platforms.
On this page you can find an overview of what is currently supported.

If you would like to see something to be supported in the future,
feel free to open [ticket](s).

### Operating systems

Supported operating systems:
- Windows: Windows 7 and later
- Linux-based operating systems: Obviously you can't test every single distro, but they should all work in principle
- macOS: Big Sur and later

Supported architectures:
- x86_64: Supported for all operating systems
- arm64: On macOS, the x86_64 version also works on ARM-based systems

X-Pipe also supports installation in headless environments, such as servers.

### Terminals

The [shell connection feature](a) supports opening a terminal application for a specific shell connection.
You are free to choose which terminal application is used here in the settings menu.
The following terminals come without of the box support:

##### Windows
- cmd
- PowerShell
- Windows Terminal

##### Linux
- Genome Terminal
- Konsole
- Xfce

##### macOS
- Terminal.app
- iTerm2
- Warp

Note that X-Pipe supports setting a custom terminal command in case your favorite terminal is not listed here.
To improve the user experience however, out of the box support is still preferred, so
you are free to open [ticket](s) to request support for your terminal application. 

### Text Editors

X-pipe supports utilizing your favorite text editor to open or edit any kind of text-based data within X-Pipe.
The following text editors are currently supported out of the box:

##### Cross-platform
- Visual Studio Code
- Sublime Text

##### Windows
- Notepad
- Notepad++
- Windows Terminal

##### Linux
- Kate
- GEdit
- Pluma
- Leafpad
- Mousepad

##### macOS
- TextEdit.app

Note that X-Pipe supports setting a custom text editor command in case your favorite editor is not listed here.
To improve the user experience however, out of the box support is still preferred, so
you are free to open [ticket](s) to request support for your editor application. 

### Shell connections

X-Pipe allows you to connect to any remote shell.
You are able to use existing shell connections to a certain host as a proxy for
connecting to another host, regardless of the connection method used.
The following ways of establishing a remote shell connection are currently supported:
- **SSH**: Password and key-based authentication, any key format should be supported
- **Window Subsystem for Linux**: Supported on any local and remote windows host. The instance
  does not have to be exposed to the public, only the host must be reachable
- **Docker**: Supported on any host, the container does not have to be exposed to the public, only the host must be reachable

Furthermore, X-Pipe allows for the usage of a custom command-line command to open a shell connection.
In case your use connection method is not listed here, there is still
the possibility of it being able to be used by using a custom command.

### Database servers

X-Pipe is able to connect to a wide range of database servers.
The following database servers are currently supported:
- **PostgreSQL**: Password authentication
- **Microsoft SQL Server**: Password authentication

### File formats

X-Pipe supports reading and writing different data formats.
The following formats are currently supported:
- **CSV**: All format variants are supported
- **XML**
- **JSON**
- **Excel**
- **Word**
- **Any pure text formats**: Usual examples are `.txt` files

Any platform specific differences like line endings or
encodings are automatically handled by X-Pipe.