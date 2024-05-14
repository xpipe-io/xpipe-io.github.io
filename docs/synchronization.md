# Synchronization

Want to have the same connections on other XPipe installations?
XPipe uses GIT to share the data to other installations of XPipe.
Here you can find the entire reference sheet for the XPipe synchronization feature.

If you prefer videos, here is an extensive video on how to set up git synchronization:

<br/>
<iframe width="560" height="315" src="https://www.youtube.com/embed/QcUNxa37diM?si=lxXMj0Skjbu-gGCo&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Synchronizing for the first time

When using the synchronizing function for the first time, it is important to have a GIT repository ready. 

**You will need to have the repository set to `private`**. <br/>
(Unless you want the public to know about your server IP address and "keys", horrendous SecOps)

You can create a remote repository on the git platform of your choice.
You need to have your local git client configured with your credentials in a credential manager, otherwise XPipe will prompt for your credentials when you start XPipe.

Nowadays, most providers require a personal access token (PAT) to authenticate from the command-line instead of traditional passwords.
**You can find common (PAT) pages here:**<br/>
**GitHub**: [Personal access tokens (classic)](https://github.com/settings/tokens)<br/>
**GitLab**: [Personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)<br/>
**BitBucket**: [Personal access token](https://support.atlassian.com/bitbucket-cloud/docs/access-tokens/)<br/>**Gitea**: `Settings -> Applications -> Manage Access Tokens section` |
Set the token permission for repository to Read and Write. The rest of the token permissions can be set as Read.

Once you have your token you can start XPipe and go to `Settings -> Synchronization` tab and insert your git http url e.g `https://github.com/name/xpipe-vault`. Then restart XPipe and enter your `username` and `TOKEN` if asked.

To have connections inside a certain category be put inside your git repository,
you need it to right-click it or click on the `⚙️` icon (when hovering over the category)
in your `connections` tab under the `category` overview on the left side.
Press `Add to git repository`, to sync the category and connections to your git repository.
(It will sync in the background, so no need to worry.)

![Connections_sync_menu](../static/img/connections_sync_menu.png)

And TA-DA!! 🎉 You now have all your connections in your git repository.

### Troubleshooting

- Check if you have the correct login information or URL to the repository.