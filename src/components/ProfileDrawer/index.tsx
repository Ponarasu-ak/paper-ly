import DialogTitle from "@mui/joy/DialogTitle";
import Drawer from "@mui/joy/Drawer";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import { Profile, ProfileAvatar } from "../../assets";
import { ButtonMui } from "../Button";
import { Divider } from "@mui/joy";

const ProfileDrawer = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <ButtonMui
        btnLable="Naveen"
        btnVarient="outlined"
        btnBorderColor="#dcdcdc"
        btnPadding="3px 12px"
        btnRadius="50px"
        btnEndIcon={<Profile />}
        btnOnclick={() => setOpen(true)}
      />

      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        anchor="right"
        slotProps={{
          backdrop: {
            sx: {
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
          },
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: "md",
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
            bgcolor: "#fff",
          }}
        >
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">Profile</DialogTitle>
            <ModalClose />
          </div>
          <Divider />

          <div className="flex flex-col items-center mt-3 gap-3">
            <img
              src={ProfileAvatar}
              height={125}
              width={125}
              alt="Profile"
              className="rounded-full border-4 border-gray-200 shadow-sm"
            />
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Hi John Doe!
              </h2>
              <p className="text-sm text-gray-500">johndoe@gmail.com</p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <h3 className="text-gray-700 font-semibold mb-2">Account</h3>
              <div className="bg-gray-100 rounded-md py-3 px-6 space-y-2 hover:bg-gray-200 transition-all cursor-pointer">
                <div className="hover:text-blue-600">Edit profile</div>
                <div className="hover:text-blue-600">Privacy</div>
              </div>
            </div>

            <div>
              <h3 className="text-gray-700 font-semibold mb-2">
                Support & Action
              </h3>
              <div className="bg-gray-100 rounded-md py-3 px-6 space-y-2 hover:bg-gray-200 transition-all cursor-pointer">
                <div className="hover:text-blue-600">Help & Support</div>
                <div className="hover:text-blue-600">Report a problem</div>
                <div className="hover:text-red-500 font-medium">Logout</div>
              </div>
            </div>
          </div>
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
};

export { ProfileDrawer };
