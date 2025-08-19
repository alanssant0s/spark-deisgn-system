// Styles
import "./styles.css";

// Utilities
export { cn } from "./utils";

// Core UI Components
export { Button, buttonVariants } from "../components/ui/button";
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
export { Input } from "../components/ui/input";
export { Label } from "../components/ui/label";
export { Badge, badgeVariants } from "../components/ui/badge";
export { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
export { Skeleton } from "../components/ui/skeleton";
export { Separator } from "../components/ui/separator";
export { Progress } from "../components/ui/progress";
export { AspectRatio } from "../components/ui/aspect-ratio";
export { Toggle, toggleVariants } from "../components/ui/toggle";
export { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";

// Form Components
export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField } from "../components/ui/form";
export { Checkbox } from "../components/ui/checkbox";
export { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from "../components/ui/select";
export { Switch } from "../components/ui/switch";
export { Slider } from "../components/ui/slider";
export { Textarea } from "../components/ui/textarea";
export { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";

// Layout Components
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
export { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../components/ui/table";
export { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
export { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../components/ui/resizable";
export { ScrollArea, ScrollBar } from "../components/ui/scroll-area";

// Overlay Components
export { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
export { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";
export { HoverCard, HoverCardContent, HoverCardTrigger } from "../components/ui/hover-card";
export { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../components/ui/drawer";

// Navigation Components
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
export { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../components/ui/navigation-menu";
export { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "../components/ui/menubar";
export { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../components/ui/command";
export { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from "../components/ui/context-menu";

// Notification Components
export { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "../components/ui/toast";
export { Toaster } from "../components/ui/toaster";
export { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
export { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../components/ui/alert-dialog";

// Date Components
export { Calendar } from "../components/ui/calendar";
export { DatePicker, DateRangePicker } from "../components/ui/date-picker";

// Data Display Components
export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../components/ui/pagination";

// Hooks
export { useToast, toast } from "../components/ui/use-toast";
export { useIsMobile } from "../hooks/use-mobile";

// Contexts
export { AuthProvider, useAuth } from "../contexts/AuthContext";
export { LayoutProvider, useLayout } from "../contexts/LayoutContext";
export { NotificationProvider, useNotifications } from "../contexts/NotificationContext";

// Auth Components
export { AuthField } from "../components/auth/AuthField";
export { default as AuthLayout } from "../components/auth/AuthLayout";
export { LoadingButton } from "../components/auth/LoadingButton";
export { PasswordStrength } from "../components/auth/PasswordStrength";
export { SocialLogin } from "../components/auth/SocialLogin";

// Form Components (Advanced)
export { CheckboxGroup } from "../components/forms/CheckboxGroup";
export { FormActions } from "../components/forms/FormActions";
export { FormField as AdvancedFormField } from "../components/forms/FormField";
export { FormSection } from "../components/forms/FormSection";
export { MaskedInput } from "../components/forms/MaskedInput";
export { PaymentForm } from "../components/forms/PaymentForm";
export { RadioGroupField } from "../components/forms/RadioGroupField";
export { RegistrationForm } from "../components/forms/RegistrationForm";
export { SwitchGroup } from "../components/forms/SwitchGroup";
export { ValidatedFormField } from "../components/forms/ValidatedFormField";

// Layout Components (Advanced)
export { LayoutProvider as LayoutProviderComponent } from "../components/layouts/LayoutProvider";
export { LayoutSettings } from "../components/LayoutSettings";

// Notification Components (Advanced)
export { NotificationCenter } from "../components/notifications/NotificationCenter";
export { NotificationToast } from "../components/notifications/NotificationToast";

// SaaS Components
export { FeatureCard } from "../components/saas/FeatureCard";
export { MetricCard } from "../components/saas/MetricCard";
export { StatCard } from "../components/saas/StatCard";
export { StatusBadge } from "../components/saas/StatusBadge";

// Error Components
export { BaseErrorPage, ErrorAlert, TroubleshootingSteps, TechnicalDetails, MaintenancePage } from "../components/errors";

// Utility Components
export { LogoProcessor } from "../components/LogoProcessor";
