import Home from "@/pages/Home";
import Asians from "@/pages/Asians";
import Blonds from "@/pages/Blonds";
import Latinas from "@/pages/Latinas";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/asians",
    component: Asians
  },
  {
    path: "/blonds",
    component: Blonds
  },
  {
    path: "/latinas",
    component: Latinas
  }
];

export default routes;
