import { Tab } from "@headlessui/react";
import Mens from "../menSection/mens/Mens";
import Womens from "../woMen/WoMens";
import Babys from "../baby/Babys";

function MyTabs() {
  return (
    <div className="items-center">
      <div>
        <h2 className="text-5xl text-gray-900"> Bast Selling</h2>
      </div>
      <div>
        <Tab.Group>
          <Tab.List className={`flex gap-12 text-[20px] justify-end`}>
            <Tab>Men</Tab>
            <Tab>Women</Tab>
            <Tab>Baye</Tab>
          </Tab.List>
          <Tab.Panels className={`w-[100%] h-full mt-12`}>
            <Tab.Panel>
              <div>
                <Mens />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                <Womens />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                <Babys />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
export default MyTabs;
