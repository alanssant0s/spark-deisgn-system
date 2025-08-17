import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Settings, MessageSquare, PenTool, Trash2, FileEdit, ShieldCheck, Menu, MoreVertical, X } from "lucide-react";

const DialogsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    toast({
      title: "Sucesso",
      description: "Dados salvos com sucesso!",
    });
    setIsOpen(false);
  };

  const handleDelete = () => {
    toast({
      title: "Item excluído",
      description: "O item foi removido permanentemente.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Dialogs & Modals
          </h1>
          <p className="text-muted-foreground text-lg">
            Dialogs, modal windows, sheets, and drawers for user interactions
          </p>
        </div>

        <Tabs defaultValue="basic" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="sheets">Sheets</TabsTrigger>
            <TabsTrigger value="drawers">Drawers</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Basic Dialogs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Simple Dialog */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Simple Dialog
                    </CardTitle>
                    <CardDescription>
                      Basic dialog with content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Simple Dialog</DialogTitle>
                          <DialogDescription>
                            This is a basic dialog example with some content.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground">
                            Dialog content goes here. You can add any components or text you need.
                          </p>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>

                {/* Form Dialog */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PenTool className="h-5 w-5" />
                      Form Dialog
                    </CardTitle>
                    <CardDescription>
                      Dialog with form elements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline">Edit Profile</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              defaultValue="Pedro Duarte"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                              Username
                            </Label>
                            <Input
                              id="username"
                              defaultValue="@peduarte"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="bio" className="text-right">
                              Bio
                            </Label>
                            <Textarea
                              id="bio"
                              placeholder="Tell us about yourself"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" onClick={handleSave}>
                            Save changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>

                {/* Settings Dialog */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Settings Dialog
                    </CardTitle>
                    <CardDescription>
                      Complex dialog with tabs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary">
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Settings</DialogTitle>
                          <DialogDescription>
                            Manage your account settings and preferences.
                          </DialogDescription>
                        </DialogHeader>
                        <Tabs defaultValue="general" className="w-full">
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="general">General</TabsTrigger>
                            <TabsTrigger value="security">Security</TabsTrigger>
                          </TabsList>
                          <TabsContent value="general" className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" defaultValue="user@example.com" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="theme">Theme</Label>
                              <Input id="theme" defaultValue="Dark" />
                            </div>
                          </TabsContent>
                          <TabsContent value="security" className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="password">New Password</Label>
                              <Input id="password" type="password" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="confirm">Confirm Password</Label>
                              <Input id="confirm" type="password" />
                            </div>
                          </TabsContent>
                        </Tabs>
                        <DialogFooter>
                          <Button>Save Changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Alert Dialogs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Confirmation Alert */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5" />
                      Confirmation
                    </CardTitle>
                    <CardDescription>
                      Confirm user actions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline">Save Changes</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Confirm Changes</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to save these changes? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={handleSave}>
                            Save Changes
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardContent>
                </Card>

                {/* Delete Alert */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trash2 className="h-5 w-5" />
                      Delete Confirmation
                    </CardTitle>
                    <CardDescription>
                      Destructive action confirmation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Item
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Item</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the item and remove all associated data.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            onClick={handleDelete}
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardContent>
                </Card>

                {/* Info Alert */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileEdit className="h-5 w-5" />
                      Information
                    </CardTitle>
                    <CardDescription>
                      Informational alerts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="secondary">Show Info</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Important Information</AlertDialogTitle>
                          <AlertDialogDescription>
                            Please read this important information before proceeding. Your data will be synchronized across all devices.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogAction>Got it</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sheets" className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Sheet Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Side Sheet */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Menu className="h-5 w-5" />
                      Side Sheet
                    </CardTitle>
                    <CardDescription>
                      Slide-in panel from side
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button>
                          <Menu className="h-4 w-4 mr-2" />
                          Open Menu
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Navigation Menu</SheetTitle>
                          <SheetDescription>
                            Quick access to main sections of the application.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="py-4 space-y-4">
                          <Button variant="ghost" className="w-full justify-start">
                            Dashboard
                          </Button>
                          <Button variant="ghost" className="w-full justify-start">
                            Analytics
                          </Button>
                          <Button variant="ghost" className="w-full justify-start">
                            Settings
                          </Button>
                          <Button variant="ghost" className="w-full justify-start">
                            Help
                          </Button>
                        </div>
                        <SheetFooter>
                          <Button className="w-full">Close</Button>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                  </CardContent>
                </Card>

                {/* Filter Sheet */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Filter Sheet
                    </CardTitle>
                    <CardDescription>
                      Sheet with form controls
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">
                          <Settings className="h-4 w-4 mr-2" />
                          Filters
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Filter Options</SheetTitle>
                          <SheetDescription>
                            Customize your view with these filter options.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="py-4 space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Input id="category" placeholder="Select category" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="date">Date Range</Label>
                            <Input id="date" type="date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Input id="status" placeholder="Select status" />
                          </div>
                        </div>
                        <SheetFooter>
                          <Button>Apply Filters</Button>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                  </CardContent>
                </Card>

                {/* Actions Sheet */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MoreVertical className="h-5 w-5" />
                      Actions Sheet
                    </CardTitle>
                    <CardDescription>
                      Sheet with action buttons
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="secondary">
                          <MoreVertical className="h-4 w-4 mr-2" />
                          Actions
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="bottom">
                        <SheetHeader>
                          <SheetTitle>Quick Actions</SheetTitle>
                          <SheetDescription>
                            Choose an action to perform on the selected items.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="py-4 grid grid-cols-2 gap-4">
                          <Button variant="outline">Edit</Button>
                          <Button variant="outline">Duplicate</Button>
                          <Button variant="outline">Archive</Button>
                          <Button variant="destructive">Delete</Button>
                        </div>
                        <SheetFooter>
                          <Button variant="ghost" className="w-full">
                            <X className="h-4 w-4 mr-2" />
                            Cancel
                          </Button>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="drawers" className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Drawer Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Mobile Drawer */}
                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Drawer</CardTitle>
                    <CardDescription>
                      Bottom drawer for mobile interfaces
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button>Open Drawer</Button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle>Mobile Actions</DrawerTitle>
                          <DrawerDescription>
                            Choose an action from the options below.
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 space-y-4">
                          <Button variant="outline" className="w-full">
                            Option 1
                          </Button>
                          <Button variant="outline" className="w-full">
                            Option 2
                          </Button>
                          <Button variant="outline" className="w-full">
                            Option 3
                          </Button>
                        </div>
                        <DrawerFooter>
                          <Button>Confirm</Button>
                          <Button variant="outline">Cancel</Button>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Usage Guidelines</CardTitle>
                <CardDescription>Best practices for using dialogs and modals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">When to Use Each Component</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <Badge variant="secondary">Dialog</Badge>
                      <span>For forms, detailed content, and complex interactions</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">AlertDialog</Badge>
                      <span>For confirmations and critical decisions</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Sheet</Badge>
                      <span>For navigation menus and filter panels</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Drawer</Badge>
                      <span>For mobile-first bottom panels</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Best Practices</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Keep dialog content focused and concise</li>
                    <li>Use clear, action-oriented button labels</li>
                    <li>Provide escape routes (cancel buttons, X buttons)</li>
                    <li>Use appropriate modal sizes for content</li>
                    <li>Consider mobile experience with drawers</li>
                    <li>Test keyboard navigation and accessibility</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Import Example</h4>
                  <div className="bg-muted p-4 rounded-lg text-sm font-mono">
                    {`import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";`}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DialogsPage;