# Two-step connections

XPipe utilizes a two-step approach when connecting to a remote system. Essentially, the first connection will be opened in the background to set everything up with init scripts etc. This is also used to validate whether we can actually connect to the system in the first place. If everything is working correctly, and any init scripts are prepared, the first connection is closed, and then a second connection is opened in your terminal.

## Consequences

As a result of this approach, some authentication systems might prompt twice for any authentication if they do not support caching or reusing the same authentication tokens for a short period of time. An example would be an SSH connection setup with two-factor authentication. Men opening such a connection with XPipe it might ask you for an authentication code twice. If the authentication policy does not allow reusing authentication codes for a short period, you might have to wait until a new authentication code is generated.

With the current connection approach of XPipe, it is not possible to work around this restriction as it depends on these two steps. 