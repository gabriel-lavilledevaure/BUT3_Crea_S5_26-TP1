import Down from "../components/icons/Down";
import Up from "../components/icons/Up";
import Facebook from "../components/icons/Facebook";
import Instagram from "../components/icons/Instagram";
import Twitter from "../components/icons/Twitter";
import Youtube from "../components/icons/Youtube";

const Icons = {
  Facebook: Facebook,
  Instagram: Instagram,
  Twitter: Twitter,
  YouTube: Youtube,
  Up: Up,
  Down: Down,
};

function getIcon(plateform) {
  return Icons[plateform] || null;
}

export { getIcon };
