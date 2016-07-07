# AvahiPublish

##### Configure Avahi Publish Service to Start Automatically After a Crash or Reboot Under Systemd

+ Path of avahi-publish.service<p>
**/lib/systemd/system/avahi-publish.service**<p>
`Meanwhile create a softlink under '/etc/systemd/system/multi-user.target.wants/'folder`<p>
**ln -s /lib/systemd/system/avahi-publish.service /etc/systemd/system/multi-user.target.wants/**<p>

+ Path of avahi-publish.js<p>
**/usr/local/sbin/avahi-publish.js**<p>
