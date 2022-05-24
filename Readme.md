
# Setup

## Node.js

To install node.js you will need to retrive binaries or installer depending on the platform.

### Windows

1. Download the Windows installer from Node official website (.msi)

     > <https://nodejs.org/en/download/>

1. Execute the **node-v16.15.0-x64.msi** or **node-v16.15.0-x86.msi**

1. This will open the setup wizard process. To complete the process:

   - Accept the License Agreement and click **next**.

   - Select the destination directory and click **next** three times.

   - Click **Install**

### Linux (Ubuntu)

1. Open the bash shell and execute the following commands:

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   sudo apt-get install -y nodejs
   apt-get install -y build-essential
   ````

1. Test the `node -v` and `npm -v` command to make sure they were install correctly.

After this process you would have successfully installed both Node.js and npm.

Note: In every case is recommended to install the Long-Term Support version (LTS), for this application we used version 16.15.0 (npm 8.5.5).

## Git

Also it will be necessary to install git to clone the application's repository.

### Windows

1. Download the Windows installer from Git official website (.msi)

     > <https://git-scm.com/download/win/>

1. Download the x32 or x64 Windows Setup depending on architecture.

1. Execute **Git-2.36.1-64-bit.exe** or **Git-2.36.1-32-bit.exe**

1. Click **next** untill you get the install button then press **install**

### Linux (Ubuntu)

1. Open the bash shell and execute the following commands:

   ```bash
   sudo add-apt-repository ppa:git-core/ppa
   sudo apt-get install git
   ````

1. Test the `git --version` command to make sure it was install correctly.

## Clone repository

In order to clone the application's repository execute the following commands from the **git bash** or **bash**:

   ```bash
   git clone https://github.com/pauljosepq/kata-temperature
   cd kata-temperature
   ```

## Application dependencies

To install all application dependencies it will necessary to execute `npm install` in the application root directory.

To start the application `npm run start` and to run tests `npm run test`
