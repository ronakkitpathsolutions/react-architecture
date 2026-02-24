'use client';

import { useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Label,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import { toast } from 'sonner';
import ICONS from '@/assets/icons';
import useT from '@/hooks/use-translation';

const UiKit = () => {
  const t = useT();

  const [checkboxStates, setCheckboxStates] = useState({
    checked1: false,
    checked2: true,
    checked3: false,
  });

  const [switchStates, setSwitchStates] = useState({
    switch1: false,
    switch2: true,
  });

  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="w-full bg-background text-foreground">
      <div className="w-full">
        <div className="w-full border-b border-t border-dashed">
          <div className="text-center py-12  max-w-7xl mx-auto border-dashed border-l border-r">
            <h1 className="text-4xl font-bold mb-2">{t('uiKit.title')}</h1>
            <p className="text-muted-foreground">{t('uiKit.description')}</p>
          </div>
        </div>
        {/* Grid Layout 6:6 */}
        <div className="grid grid-cols-12 max-w-7xl mx-auto pb-12">
          <div className="col-span-12 md:col-span-6">
            {/* Buttons Section */}
            <section className="border-dashed border p-4 border-t-0 border-b-0">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.buttons.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.buttons.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.buttons.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Default Variant */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t('uiKit.buttons.defaultVariant')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button size="xs">{t('uiKit.buttons.extraSmall')}</Button>
                      <Button size="sm">{t('uiKit.buttons.small')}</Button>
                      <Button size="default">
                        {t('uiKit.buttons.default')}
                      </Button>
                      <Button size="lg">{t('uiKit.buttons.large')}</Button>
                      <Button disabled>{t('uiKit.buttons.disabled')}</Button>
                    </div>
                  </div>

                  {/* Outline Variant */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t('uiKit.buttons.outlineVariant')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm">
                        {t('uiKit.buttons.small')}
                      </Button>
                      <Button variant="outline" size="default">
                        {t('uiKit.buttons.default')}
                      </Button>
                      <Button variant="outline" size="lg">
                        {t('uiKit.buttons.large')}
                      </Button>
                    </div>
                  </div>

                  {/* Secondary Variant */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t('uiKit.buttons.secondaryVariant')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="secondary" size="sm">
                        {t('uiKit.buttons.small')}
                      </Button>
                      <Button variant="secondary">
                        {t('uiKit.buttons.default')}
                      </Button>
                      <Button variant="secondary" size="lg">
                        {t('uiKit.buttons.large')}
                      </Button>
                    </div>
                  </div>

                  {/* Ghost Variant */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t('uiKit.buttons.ghostVariant')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="ghost" size="sm">
                        {t('uiKit.buttons.small')}
                      </Button>
                      <Button variant="ghost">
                        {t('uiKit.buttons.default')}
                      </Button>
                      <Button variant="ghost" size="lg">
                        {t('uiKit.buttons.large')}
                      </Button>
                    </div>
                  </div>

                  {/* Destructive Variant */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t('uiKit.buttons.destructiveVariant')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="destructive" size="sm">
                        {t('uiKit.buttons.small')}
                      </Button>
                      <Button variant="destructive">
                        {t('uiKit.buttons.default')}
                      </Button>
                      <Button variant="destructive" size="lg">
                        {t('uiKit.buttons.large')}
                      </Button>
                    </div>
                  </div>

                  {/* Link Variant */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t('uiKit.buttons.linkVariant')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="link" size="sm">
                        {t('uiKit.buttons.smallLink')}
                      </Button>
                      <Button variant="link">
                        {t('uiKit.buttons.defaultLink')}
                      </Button>
                      <Button variant="link" size="lg">
                        {t('uiKit.buttons.largeLink')}
                      </Button>
                    </div>
                  </div>

                  {/* Icon Buttons */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t('uiKit.buttons.iconButtons')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button size="icon-xs">@</Button>
                      <Button size="icon-sm">+</Button>
                      <Button size="icon">*</Button>
                      <Button size="icon-lg">#</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Tooltips Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.tooltips.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.tooltips.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.tooltips.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TooltipProvider>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline">
                              {t('uiKit.tooltips.hoverBottom')}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            {t('uiKit.tooltips.bottomTooltip')}
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost">
                              {t('uiKit.tooltips.right')}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="right" sideOffset={6}>
                            {t('uiKit.tooltips.rightTooltip')}
                          </TooltipContent>
                        </Tooltip>
                      </div>

                      <div className="flex items-center gap-3">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="secondary">
                              {t('uiKit.tooltips.top')}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top" sideOffset={6}>
                            {t('uiKit.tooltips.topTooltip')}
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="link">
                              {t('uiKit.tooltips.left')}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="left" sideOffset={6}>
                            {t('uiKit.tooltips.leftTooltip')}
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  </TooltipProvider>
                </CardContent>
              </Card>
            </section>

            {/* Accordion Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.accordion.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.accordion.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.accordion.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">
                        {t('uiKit.accordion.default')}
                      </h4>
                      <details className="group border rounded-md p-3">
                        <summary className="cursor-pointer select-none font-medium">
                          {t('uiKit.accordion.itemOne')}
                        </summary>
                        <div className="mt-2 text-sm text-muted-foreground">
                          {t('uiKit.accordion.itemOneContent')}
                        </div>
                      </details>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        {t('uiKit.accordion.compact')}
                      </h4>
                      <details className="group border rounded-md p-2 text-sm">
                        <summary className="cursor-pointer select-none font-medium">
                          {t('uiKit.accordion.compactItem')}
                        </summary>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {t('uiKit.accordion.compactContent')}
                        </div>
                      </details>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        {t('uiKit.accordion.nested')}
                      </h4>
                      <details className="group border rounded-md p-3">
                        <summary className="cursor-pointer select-none font-medium">
                          {t('uiKit.accordion.parentItem')}
                        </summary>
                        <div className="mt-2 space-y-2">
                          <p className="text-sm text-muted-foreground">
                            {t('uiKit.accordion.parentContent')}
                          </p>
                          <details className="group border rounded-md p-2">
                            <summary className="cursor-pointer select-none font-medium">
                              {t('uiKit.accordion.childItem')}
                            </summary>
                            <div className="mt-1 text-sm text-muted-foreground">
                              {t('uiKit.accordion.nestedContent')}
                            </div>
                          </details>
                        </div>
                      </details>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        {t('uiKit.accordion.disabled')}
                      </h4>
                      <details
                        className="group border rounded-md p-3 opacity-50 pointer-events-none"
                        aria-disabled
                      >
                        <summary className="cursor-not-allowed select-none font-medium">
                          {t('uiKit.accordion.disabledItem')}
                        </summary>
                        <div className="mt-2 text-sm text-muted-foreground">
                          {t('uiKit.accordion.disabledContent')}
                        </div>
                      </details>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Button Group Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.buttonGroup.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.buttonGroup.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.buttonGroup.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h4 className="font-medium mb-2">
                        {t('uiKit.buttonGroup.horizontal')}
                      </h4>
                      <div className="flex items-center gap-3">
                        <ButtonGroup>
                          <Button>{t('uiKit.buttonGroup.left')}</Button>
                          <Button>{t('uiKit.buttonGroup.middle')}</Button>
                          <Button>{t('uiKit.buttonGroup.right')}</Button>
                        </ButtonGroup>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        {t('uiKit.buttonGroup.vertical')}
                      </h4>
                      <div className="flex items-start gap-3">
                        <ButtonGroup orientation="vertical">
                          <Button>{t('uiKit.buttonGroup.one')}</Button>
                          <Button>{t('uiKit.buttonGroup.two')}</Button>
                          <Button>{t('uiKit.buttonGroup.three')}</Button>
                        </ButtonGroup>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        {t('uiKit.buttonGroup.segmented')}
                      </h4>
                      <div className="flex items-center gap-3">
                        <ButtonGroup>
                          <Button variant="outline">A</Button>
                          <Button>{t('uiKit.buttonGroup.center')}</Button>
                          <Button variant="ghost">C</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                          <Button size="icon-sm">
                            <ICONS.Plus className="size-4" />
                          </Button>
                          <Button size="icon-sm">
                            <ICONS.Minus className="size-4" />
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Notifications (Sonner) Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.notifications.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.notifications.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.notifications.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      onClick={() =>
                        toast(t('uiKit.notifications.defaultMessage'))
                      }
                    >
                      {t('uiKit.notifications.toast')}
                    </Button>
                    <Button
                      onClick={() =>
                        toast.success(t('uiKit.notifications.successMessage'))
                      }
                    >
                      {t('uiKit.notifications.success')}
                    </Button>
                    <Button
                      onClick={() =>
                        toast.info(t('uiKit.notifications.infoMessage'))
                      }
                    >
                      {t('uiKit.notifications.info')}
                    </Button>
                    <Button
                      onClick={() =>
                        toast.warning(t('uiKit.notifications.warningMessage'))
                      }
                    >
                      {t('uiKit.notifications.warning')}
                    </Button>
                    <Button
                      onClick={() =>
                        toast.error(t('uiKit.notifications.errorMessage'))
                      }
                    >
                      {t('uiKit.notifications.error')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Tabs Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.tabs.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.tabs.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.tabs.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-w-md">
                    <Tabs defaultValue="tab1">
                      <TabsList>
                        <TabsTrigger value="tab1">
                          {t('uiKit.tabs.tab1')}
                        </TabsTrigger>
                        <TabsTrigger value="tab2">
                          {t('uiKit.tabs.tab2')}
                        </TabsTrigger>
                      </TabsList>
                      <div className="mt-3">
                        <TabsContent value="tab1">
                          {t('uiKit.tabs.tab1Content')}
                        </TabsContent>
                        <TabsContent value="tab2">
                          {t('uiKit.tabs.tab2Content')}
                        </TabsContent>
                      </div>
                    </Tabs>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Toggle Group Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.toggleGroup.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.toggleGroup.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.toggleGroup.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <ToggleGroup
                      type="single"
                      defaultValue="bold"
                      aria-label="Text formatting"
                    >
                      <ToggleGroupItem value="bold">
                        {t('uiKit.toggleGroup.bold')}
                      </ToggleGroupItem>
                      <ToggleGroupItem value="italic">
                        {t('uiKit.toggleGroup.italic')}
                      </ToggleGroupItem>
                      <ToggleGroupItem value="underline">
                        {t('uiKit.toggleGroup.underline')}
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Badges Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.badges.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.badges.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.badges.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.badges.default')}
                    </h3>
                    <Badge>{t('uiKit.badges.defaultBadge')}</Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.badges.secondary')}
                    </h3>
                    <Badge variant="secondary">
                      {t('uiKit.badges.secondaryBadge')}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.badges.destructive')}
                    </h3>
                    <Badge variant="destructive">
                      {t('uiKit.badges.destructiveBadge')}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.badges.outline')}
                    </h3>
                    <Badge variant="outline">
                      {t('uiKit.badges.outlineBadge')}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.badges.ghost')}
                    </h3>
                    <Badge variant="ghost">
                      {t('uiKit.badges.ghostBadge')}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.badges.link')}
                    </h3>
                    <Badge variant="link">{t('uiKit.badges.linkBadge')}</Badge>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Form Inputs Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.formInputs.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.formInputs.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.formInputs.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 max-w-md">
                  {/* Text Input */}
                  <div>
                    <Label htmlFor="text-input">
                      {t('uiKit.formInputs.textInput')}
                    </Label>
                    <Input
                      id="text-input"
                      type="text"
                      placeholder={t('uiKit.formInputs.enterText')}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <Label htmlFor="email-input">
                      {t('uiKit.formInputs.emailInput')}
                    </Label>
                    <Input
                      id="email-input"
                      type="email"
                      placeholder={t('uiKit.formInputs.emailPlaceholder')}
                      className="mt-2"
                    />
                  </div>

                  {/* Password Input */}
                  <div>
                    <Label htmlFor="password-input">
                      {t('uiKit.formInputs.passwordInput')}
                    </Label>
                    <Input
                      id="password-input"
                      type="password"
                      placeholder={t('uiKit.formInputs.passwordPlaceholder')}
                      className="mt-2"
                    />
                  </div>

                  {/* Number Input */}
                  <div>
                    <Label htmlFor="number-input">
                      {t('uiKit.formInputs.numberInput')}
                    </Label>
                    <Input
                      id="number-input"
                      type="number"
                      placeholder="0"
                      className="mt-2"
                    />
                  </div>

                  {/* Textarea */}
                  <div>
                    <Label htmlFor="textarea">
                      {t('uiKit.formInputs.textarea')}
                    </Label>
                    <Textarea
                      id="textarea"
                      placeholder={t('uiKit.formInputs.textareaPlaceholder')}
                      value={textareaValue}
                      onChange={(e) => setTextareaValue(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  {/* Disabled Input */}
                  <div>
                    <Label htmlFor="disabled-input">
                      {t('uiKit.formInputs.disabledInput')}
                    </Label>
                    <Input
                      id="disabled-input"
                      type="text"
                      placeholder={t('uiKit.formInputs.disabledPlaceholder')}
                      disabled
                      className="mt-2"
                    />
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Checkboxes Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.checkboxes.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.checkboxes.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.checkboxes.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="checkbox-1"
                      checked={checkboxStates.checked1}
                      onCheckedChange={(checked) =>
                        setCheckboxStates({
                          ...checkboxStates,
                          checked1: !!checked,
                        })
                      }
                    />
                    <Label htmlFor="checkbox-1">
                      {t('uiKit.checkboxes.unchecked')}
                    </Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="checkbox-2"
                      checked={checkboxStates.checked2}
                      onCheckedChange={(checked) =>
                        setCheckboxStates({
                          ...checkboxStates,
                          checked2: !!checked,
                        })
                      }
                    />
                    <Label htmlFor="checkbox-2">
                      {t('uiKit.checkboxes.checked')}
                    </Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <Checkbox id="checkbox-3" disabled />
                    <Label htmlFor="checkbox-3">
                      {t('uiKit.checkboxes.disabled')}
                    </Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <Checkbox id="checkbox-4" defaultChecked disabled />
                    <Label htmlFor="checkbox-4">
                      {t('uiKit.checkboxes.disabledChecked')}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Switches Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.switches.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.switches.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.switches.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Default Size */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.switches.defaultSize')}
                    </h3>
                    <div className="flex items-center gap-3">
                      <Switch
                        checked={switchStates.switch1}
                        onCheckedChange={(checked) =>
                          setSwitchStates({ ...switchStates, switch1: checked })
                        }
                      />
                      <span className="text-sm">
                        {switchStates.switch1
                          ? t('uiKit.switches.enabled')
                          : t('uiKit.switches.disabled')}
                      </span>
                    </div>
                  </div>

                  {/* Small Size */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.switches.smallSize')}
                    </h3>
                    <div className="flex items-center gap-3">
                      <Switch
                        size="sm"
                        checked={switchStates.switch2}
                        onCheckedChange={(checked) =>
                          setSwitchStates({ ...switchStates, switch2: checked })
                        }
                      />
                      <span className="text-sm">
                        {switchStates.switch2
                          ? t('uiKit.switches.enabled')
                          : t('uiKit.switches.disabled')}
                      </span>
                    </div>
                  </div>

                  {/* Disabled */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.switches.disabled')}
                    </h3>
                    <div className="flex items-center gap-3">
                      <Switch disabled defaultChecked />
                      <span className="text-sm text-muted-foreground">
                        {t('uiKit.switches.disabledSwitch')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Select Section */}
            <section className="border-dashed border border-b p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.select.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.select.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.select.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 max-w-md">
                  <div>
                    <Label>{t('uiKit.select.defaultSelect')}</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue
                          placeholder={t('uiKit.select.selectOption')}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">
                          {t('uiKit.select.option1')}
                        </SelectItem>
                        <SelectItem value="option2">
                          {t('uiKit.select.option2')}
                        </SelectItem>
                        <SelectItem value="option3">
                          {t('uiKit.select.option3')}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>{t('uiKit.select.smallSelect')}</Label>
                    <Select>
                      <SelectTrigger size="sm" className="mt-2">
                        <SelectValue
                          placeholder={t('uiKit.select.smallSelectPlaceholder')}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a">
                          {t('uiKit.select.choiceA')}
                        </SelectItem>
                        <SelectItem value="b">
                          {t('uiKit.select.choiceB')}
                        </SelectItem>
                        <SelectItem value="c">
                          {t('uiKit.select.choiceC')}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>{t('uiKit.select.disabledSelect')}</Label>
                    <Select disabled>
                      <SelectTrigger className="mt-2">
                        <SelectValue
                          placeholder={t('uiKit.select.disabledPlaceholder')}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="x">
                          {t('uiKit.select.itemX')}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
          <div className="col-span-12 md:col-span-6">
            {/* Avatars Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-t-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.avatars.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.avatars.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.avatars.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* With Image */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t('uiKit.avatars.withImage')}
                    </h3>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {t('uiKit.avatars.small')}
                        </p>
                        <Avatar size="sm">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {t('uiKit.avatars.default')}
                        </p>
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {t('uiKit.avatars.large')}
                        </p>
                        <Avatar size="lg">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>

                  {/* Fallback Only */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t('uiKit.avatars.fallbackOnly')}
                    </h3>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {t('uiKit.avatars.small')}
                        </p>
                        <Avatar size="sm">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {t('uiKit.avatars.default')}
                        </p>
                        <Avatar>
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {t('uiKit.avatars.large')}
                        </p>
                        <Avatar size="lg">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Alerts Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.alerts.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.alerts.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.alerts.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertTitle>{t('uiKit.alerts.information')}</AlertTitle>
                    <AlertDescription>
                      {t('uiKit.alerts.infoMessage')}
                    </AlertDescription>
                  </Alert>

                  <Alert variant="destructive">
                    <AlertTitle>{t('uiKit.alerts.error')}</AlertTitle>
                    <AlertDescription>
                      {t('uiKit.alerts.errorMessage')}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </section>

            {/* Progress Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.progress.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.progress.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.progress.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-sm mb-2">0%</p>
                    <Progress value={0} />
                  </div>

                  <div>
                    <p className="text-sm mb-2">25%</p>
                    <Progress value={25} />
                  </div>

                  <div>
                    <p className="text-sm mb-2">50%</p>
                    <Progress value={50} />
                  </div>

                  <div>
                    <p className="text-sm mb-2">75%</p>
                    <Progress value={75} />
                  </div>

                  <div>
                    <p className="text-sm mb-2">100%</p>
                    <Progress value={100} />
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Loaders Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.loaders.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.loaders.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.loaders.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Spinner */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t('uiKit.loaders.spinner')}
                    </h3>
                    <div className="flex items-center gap-4">
                      <Spinner />
                      <span className="text-sm text-muted-foreground">
                        {t('uiKit.loaders.loading')}
                      </span>
                    </div>
                  </div>

                  {/* Skeletons */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t('uiKit.loaders.skeletonStates')}
                    </h3>
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                      <div className="pt-2 flex gap-3">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-4/5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Dialog Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.dialog.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.dialog.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.dialog.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          {t('uiKit.dialog.openDialog')}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            {t('uiKit.dialog.dialogTitle')}
                          </DialogTitle>
                          <DialogDescription>
                            {t('uiKit.dialog.dialogDescription')}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground">
                            {t('uiKit.dialog.dialogBody')}
                          </p>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">
                            {t('uiKit.dialog.cancel')}
                          </Button>
                          <Button>{t('uiKit.dialog.confirm')}</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Alert Dialog Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.alertDialog.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.alertDialog.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.alertDialog.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">
                        {t('uiKit.alertDialog.deleteItem')}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          {t('uiKit.alertDialog.areYouSure')}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          {t('uiKit.alertDialog.deleteWarning')}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>
                          {t('uiKit.alertDialog.cancel')}
                        </AlertDialogCancel>
                        <AlertDialogAction>
                          {t('uiKit.alertDialog.continue')}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>
            </section>

            {/* Sheet Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.sheet.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.sheet.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.sheet.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">
                          {t('uiKit.sheet.openRight')}
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>{t('uiKit.sheet.sheetTitle')}</SheetTitle>
                          <SheetDescription>
                            {t('uiKit.sheet.sheetDescription')}
                          </SheetDescription>
                        </SheetHeader>
                      </SheetContent>
                    </Sheet>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">
                          {t('uiKit.sheet.openLeft')}
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left">
                        <SheetHeader>
                          <SheetTitle>{t('uiKit.sheet.leftSheet')}</SheetTitle>
                          <SheetDescription>
                            {t('uiKit.sheet.leftSheetDescription')}
                          </SheetDescription>
                        </SheetHeader>
                      </SheetContent>
                    </Sheet>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Dropdown Menu Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.dropdownMenu.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.dropdownMenu.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.dropdownMenu.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        {t('uiKit.dropdownMenu.openMenu')}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>
                        {t('uiKit.dropdownMenu.actions')}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        {t('uiKit.dropdownMenu.profile')}
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        {t('uiKit.dropdownMenu.settings')}
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        {t('uiKit.dropdownMenu.billing')}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">
                        {t('uiKit.dropdownMenu.logOut')}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
            </section>

            {/* Breadcrumb Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.breadcrumb.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.breadcrumb.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.breadcrumb.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">
                          {t('uiKit.breadcrumb.home')}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">
                          {t('uiKit.breadcrumb.components')}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>
                          {t('uiKit.breadcrumb.cardTitle')}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </CardContent>
              </Card>
            </section>

            {/* Separator Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.separator.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.separator.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.separator.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.separator.horizontal')}
                    </h3>
                    <div className="space-y-3">
                      <p className="text-sm">
                        {t('uiKit.separator.contentAbove')}
                      </p>
                      <Separator />
                      <p className="text-sm">
                        {t('uiKit.separator.contentBelow')}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.separator.vertical')}
                    </h3>
                    <div className="flex items-center gap-3 h-6">
                      <span className="text-sm">
                        {t('uiKit.separator.left')}
                      </span>
                      <Separator orientation="vertical" />
                      <span className="text-sm">
                        {t('uiKit.separator.right')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Table Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.table.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.table.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.table.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t('uiKit.table.name')}</TableHead>
                        <TableHead>{t('uiKit.table.status')}</TableHead>
                        <TableHead className="text-end">
                          {t('uiKit.table.amount')}
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>{t('uiKit.table.johnDoe')}</TableCell>
                        <TableCell>{t('uiKit.table.active')}</TableCell>
                        <TableCell className="text-end">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{t('uiKit.table.janeSmith')}</TableCell>
                        <TableCell>{t('uiKit.table.pending')}</TableCell>
                        <TableCell className="text-end">$150.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{t('uiKit.table.bobJohnson')}</TableCell>
                        <TableCell>{t('uiKit.table.inactive')}</TableCell>
                        <TableCell className="text-end">$350.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </section>

            {/* Input OTP Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.inputOtp.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.inputOtp.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.inputOtp.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.inputOtp.sixDigits')}
                    </h3>
                    <InputOTP maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.inputOtp.fourDigits')}
                    </h3>
                    <InputOTP maxLength={4}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Pagination Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.pagination.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.pagination.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.pagination.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardContent>
              </Card>
            </section>

            {/* Typography Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.typography.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.typography.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.typography.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold">
                      {t('uiKit.typography.heading1')}
                    </h1>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">
                      {t('uiKit.typography.heading2')}
                    </h2>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {t('uiKit.typography.heading3')}
                    </h3>
                  </div>
                  <div>
                    <p className="text-base">
                      {t('uiKit.typography.paragraph')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t('uiKit.typography.mutedText')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
            {/* Slider Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.slider.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.slider.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.slider.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 max-w-md">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.slider.default')}
                    </h3>
                    <Slider
                      value={sliderValue}
                      onValueChange={setSliderValue}
                      max={100}
                      step={1}
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      {t('uiKit.slider.value', { value: sliderValue[0] })}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.slider.withSteps')}
                    </h3>
                    <Slider defaultValue={[25]} max={100} step={25} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Disabled</h3>
                    <Slider defaultValue={[50]} max={100} disabled />
                  </div>
                </CardContent>
              </Card>
            </section>
            {/* Radio Group Section */}
            <section className="border-dashed border border-l-0 rtl:border-l rtl:border-r-0 border-b p-4">
              <h2 className="text-2xl font-semibold mb-6">
                {t('uiKit.radioGroup.title')}
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>{t('uiKit.radioGroup.cardTitle')}</CardTitle>
                  <CardDescription>
                    {t('uiKit.radioGroup.cardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.radioGroup.default')}
                    </h3>
                    <RadioGroup defaultValue="option-1">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="option-1" id="radio-1" />
                        <Label htmlFor="radio-1">
                          {t('uiKit.radioGroup.optionOne')}
                        </Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="option-2" id="radio-2" />
                        <Label htmlFor="radio-2">
                          {t('uiKit.radioGroup.optionTwo')}
                        </Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="option-3" id="radio-3" />
                        <Label htmlFor="radio-3">
                          {t('uiKit.radioGroup.optionThree')}
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t('uiKit.radioGroup.disabled')}
                    </h3>
                    <RadioGroup defaultValue="disabled-1" disabled>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="disabled-1" id="radio-d1" />
                        <Label htmlFor="radio-d1">
                          {t('uiKit.radioGroup.disabledSelected')}
                        </Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="disabled-2" id="radio-d2" />
                        <Label htmlFor="radio-d2">
                          {t('uiKit.radioGroup.disabled')}
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiKit;
