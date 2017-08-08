# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
    config.vm.box = "precise64"
    config.vm.box_url = "http://files.vagrantup.com/precise64.box"
    config.vm.hostname = "test-app"
    config.vm.network "private_network", ip: "192.168.33.32"

    config.vm.synced_folder "./test-app", "/home/vagrant/test-app"

    config.vm.provision :shell, path: "./vagrant-setup/mysql-setup.sh"
    config.vm.provision :shell, path: "./vagrant-setup/install-rvm.sh", args: "stable", privileged: false
    config.vm.provision :shell, path: "./vagrant-setup/install-ruby.sh", args: "2.2.3 rails haml", privileged: false
    config.vm.provision :shell, path: "./vagrant-setup/install-git.sh", privileged: false

    config.push.define "heroku" do |push|
      push.app = "Testapp"
      push.dir = "testapp"
      push.remote = "heroku"
    end
end
