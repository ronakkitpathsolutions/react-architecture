'use client';

import { useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Progress,
  Skeleton,
  Spinner,
  Switch,
  Textarea,
} from '@/components/ui';

const UiKit = () => {
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

  return (
    <div className="w-full bg-background text-foreground">
      <div className="w-full">
        <div className="py-12 text-center border-b border-dashed">
          <h1 className="text-4xl font-bold mb-2">UI Kit</h1>
          <p className="text-muted-foreground">
            Comprehensive showcase of all core UI components with variants and
            types
          </p>
        </div>
        {/* Grid Layout 6:6 */}
        <div className="grid grid-cols-12 max-w-7xl mx-auto pb-12">
          <div className="col-span-12 md:col-span-6">
            {/* Buttons Section */}
            <section className="border-dashed border p-4 border-t-0 border-b-0">
              <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                  <CardDescription>
                    All available button variants with different sizes and
                    states
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Default Variant */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Default Variant
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button size="xs">Extra Small</Button>
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                      <Button disabled>Disabled</Button>
                    </div>
                  </div>

                  {/* Outline Variant */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Outline Variant
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm">
                        Small
                      </Button>
                      <Button variant="outline" size="default">
                        Default
                      </Button>
                      <Button variant="outline" size="lg">
                        Large
                      </Button>
                    </div>
                  </div>

                  {/* Secondary Variant */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Secondary Variant
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="secondary" size="sm">
                        Small
                      </Button>
                      <Button variant="secondary">Default</Button>
                      <Button variant="secondary" size="lg">
                        Large
                      </Button>
                    </div>
                  </div>

                  {/* Ghost Variant */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Ghost Variant
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="ghost" size="sm">
                        Small
                      </Button>
                      <Button variant="ghost">Default</Button>
                      <Button variant="ghost" size="lg">
                        Large
                      </Button>
                    </div>
                  </div>

                  {/* Destructive Variant */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Destructive Variant
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="destructive" size="sm">
                        Small
                      </Button>
                      <Button variant="destructive">Default</Button>
                      <Button variant="destructive" size="lg">
                        Large
                      </Button>
                    </div>
                  </div>

                  {/* Link Variant */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Link Variant</h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="link" size="sm">
                        Small Link
                      </Button>
                      <Button variant="link">Default Link</Button>
                      <Button variant="link" size="lg">
                        Large Link
                      </Button>
                    </div>
                  </div>

                  {/* Icon Buttons */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Icon Buttons</h3>
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

            {/* Badges Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">Badges</h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Badge Variants</CardTitle>
                  <CardDescription>
                    All available badge variants
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Default</h3>
                    <Badge>Default Badge</Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Secondary</h3>
                    <Badge variant="secondary">Secondary Badge</Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Destructive</h3>
                    <Badge variant="destructive">Destructive Badge</Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Outline</h3>
                    <Badge variant="outline">Outline Badge</Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Ghost</h3>
                    <Badge variant="ghost">Ghost Badge</Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Link</h3>
                    <Badge variant="link">Link Badge</Badge>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Form Inputs Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">Form Inputs</h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Input Components</CardTitle>
                  <CardDescription>
                    All form input variants and states
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 max-w-md">
                  {/* Text Input */}
                  <div>
                    <Label htmlFor="text-input">Text Input</Label>
                    <Input
                      id="text-input"
                      type="text"
                      placeholder="Enter text..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <Label htmlFor="email-input">Email Input</Label>
                    <Input
                      id="email-input"
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                  </div>

                  {/* Password Input */}
                  <div>
                    <Label htmlFor="password-input">Password Input</Label>
                    <Input
                      id="password-input"
                      type="password"
                      placeholder="••••••••"
                      className="mt-2"
                    />
                  </div>

                  {/* Number Input */}
                  <div>
                    <Label htmlFor="number-input">Number Input</Label>
                    <Input
                      id="number-input"
                      type="number"
                      placeholder="0"
                      className="mt-2"
                    />
                  </div>

                  {/* Textarea */}
                  <div>
                    <Label htmlFor="textarea">Textarea</Label>
                    <Textarea
                      id="textarea"
                      placeholder="Enter your message..."
                      value={textareaValue}
                      onChange={(e) => setTextareaValue(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  {/* Disabled Input */}
                  <div>
                    <Label htmlFor="disabled-input">Disabled Input</Label>
                    <Input
                      id="disabled-input"
                      type="text"
                      placeholder="Disabled input"
                      disabled
                      className="mt-2"
                    />
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Checkboxes Section */}
            <section className="border-dashed border border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">Checkboxes</h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Checkbox States</CardTitle>
                  <CardDescription>
                    Different checkbox states and options
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
                    <Label htmlFor="checkbox-1">Unchecked</Label>
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
                    <Label htmlFor="checkbox-2">Checked</Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <Checkbox id="checkbox-3" disabled />
                    <Label htmlFor="checkbox-3">Disabled</Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <Checkbox id="checkbox-4" defaultChecked disabled />
                    <Label htmlFor="checkbox-4">Disabled Checked</Label>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Switches Section */}
            <section className="border-dashed border border-b p-4">
              <h2 className="text-2xl font-semibold mb-6">Switches</h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Switch Variants</CardTitle>
                  <CardDescription>
                    Switch component with different sizes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Default Size */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Default Size</h3>
                    <div className="flex items-center gap-3">
                      <Switch
                        checked={switchStates.switch1}
                        onCheckedChange={(checked) =>
                          setSwitchStates({ ...switchStates, switch1: checked })
                        }
                      />
                      <span className="text-sm">
                        {switchStates.switch1 ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </div>

                  {/* Small Size */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Small Size</h3>
                    <div className="flex items-center gap-3">
                      <Switch
                        size="sm"
                        checked={switchStates.switch2}
                        onCheckedChange={(checked) =>
                          setSwitchStates({ ...switchStates, switch2: checked })
                        }
                      />
                      <span className="text-sm">
                        {switchStates.switch2 ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </div>

                  {/* Disabled */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Disabled</h3>
                    <div className="flex items-center gap-3">
                      <Switch disabled defaultChecked />
                      <span className="text-sm text-muted-foreground">
                        Disabled Switch
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
          <div className="col-span-12 md:col-span-6">
            {/* Avatars Section */}
            <section className="border-dashed border border-l-0 border-t-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">Avatars</h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Avatar Sizes</CardTitle>
                  <CardDescription>
                    Different avatar sizes with image and fallback
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* With Image */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">With Image</h3>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Small
                        </p>
                        <Avatar size="sm">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Default
                        </p>
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Large
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
                      Fallback Only
                    </h3>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Small
                        </p>
                        <Avatar size="sm">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Default
                        </p>
                        <Avatar>
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Large
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
            <section className="border-dashed border border-l-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">Alerts</h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Alert Variants</CardTitle>
                  <CardDescription>
                    Different alert types and messages
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is an informational alert message.
                    </AlertDescription>
                  </Alert>

                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      This is an error alert message indicating something went
                      wrong.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </section>

            {/* Progress Section */}
            <section className="border-dashed border border-l-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">Progress</h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Progress Bars</CardTitle>
                  <CardDescription>Different progress states</CardDescription>
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
            <section className="border-dashed border border-l-0 border-b-0 p-4">
              <h2 className="text-2xl font-semibold mb-6">
                Loaders & Skeletons
              </h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Loading States</CardTitle>
                  <CardDescription>
                    Spinner and skeleton loading components
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Spinner */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Spinner</h3>
                    <div className="flex items-center gap-4">
                      <Spinner />
                      <span className="text-sm text-muted-foreground">
                        Loading...
                      </span>
                    </div>
                  </div>

                  {/* Skeletons */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Skeleton States
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

            {/* Typography Section */}
            <section className="border-dashed border border-l-0 border-b p-4">
              <h2 className="text-2xl font-semibold mb-6">Typography</h2>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Text Styles</CardTitle>
                  <CardDescription>
                    Standard typography elements and their usage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold">Heading 1</h1>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Heading 2</h2>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Heading 3</h3>
                  </div>
                  <div>
                    <p className="text-base">
                      This is a regular paragraph with normal text weight and
                      size.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      This is smaller text with muted foreground color.
                    </p>
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
