// Core UI Components
export { Button, buttonVariants } from "../components/ui/button";
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
export { Input } from "../components/ui/input";
export { Label } from "../components/ui/label";
export { Badge, badgeVariants } from "../components/ui/badge";
export { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
export { Skeleton } from "../components/ui/skeleton";
export { Separator } from "../components/ui/separator";
export { Progress } from "../components/ui/progress";

// Form Components
export { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, useFormField } from "../components/ui/form";
export { Checkbox } from "../components/ui/checkbox";
export { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator } from "../components/ui/select";
export { Switch } from "../components/ui/switch";
export { Slider } from "../components/ui/slider";
export { Textarea } from "../components/ui/textarea";

// Layout Components
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
export { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "../components/ui/table";

// Overlay Components
export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "../components/ui/dialog";
export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription } from "../components/ui/sheet";
export { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover";
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../components/ui/tooltip";
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup } from "../components/ui/dropdown-menu";

// Navigation Components
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";

// Notification Components
export { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "../components/ui/toast";
export { Toaster } from "../components/ui/toaster";
export { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
export { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../components/ui/alert-dialog";

// Date Components
export { Calendar } from "../components/ui/calendar";
export { DatePicker } from "../components/ui/date-picker";

// Data Display Components
export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../components/ui/pagination";
export { PageHeader } from "../components/ui/page-header";

// Hooks
export { useToast } from "../hooks/use-toast";
export { useIsMobile as useMobile } from "../hooks/use-mobile";

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

// Advanced Form Components
export { FormField as AdvancedFormField } from "../components/forms/FormField";
export { CheckboxGroup } from "../components/forms/CheckboxGroup";
export { FormActions } from "../components/forms/FormActions";
export { FormSection } from "../components/forms/FormSection";
export { MaskedInput } from "../components/forms/MaskedInput";
export { PaymentForm } from "../components/forms/PaymentForm";
export { RadioGroupField } from "../components/forms/RadioGroupField";
export { RegistrationForm } from "../components/forms/RegistrationForm";
export { SwitchGroup } from "../components/forms/SwitchGroup";
export { ValidatedFormField } from "../components/forms/ValidatedFormField";

// Advanced Layout Components
export { HorizontalLayout } from "../components/layouts/HorizontalLayout";
export { VerticalLayout } from "../components/layouts/VerticalLayout";

// Notification Components (Advanced)
export { NotificationCenter } from "../components/notifications/NotificationCenter";
export { NotificationToast } from "../components/notifications/NotificationToast";

// SaaS Components
export { FeatureCard } from "../components/saas/FeatureCard";
export { MetricCard } from "../components/saas/MetricCard";
export { SaasLayout } from "../components/saas/SaasLayout";
export { StatCard } from "../components/saas/StatCard";
export { StatusBadge } from "../components/saas/StatusBadge";

// Error Components
export { default as BaseErrorPage } from "../components/errors/BaseErrorPage";
export { default as ErrorAlert } from "../components/errors/ErrorAlert";
export { default as ErrorBoundary } from "../components/errors/ErrorBoundary";
export { default as MaintenancePage } from "../components/errors/MaintenancePage";
export { default as TechnicalDetails } from "../components/errors/TechnicalDetails";
export { default as TroubleshootingSteps } from "../components/errors/TroubleshootingSteps";

// Utility Components
export { LogoProcessor } from "../components/LogoProcessor";
export { LayoutSettings } from "../components/LayoutSettings";

// Utilities
export { cn } from "./utils";
